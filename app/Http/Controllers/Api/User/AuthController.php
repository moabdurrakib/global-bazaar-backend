<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Http\Resources\User\AuthResourse;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Twilio\Rest\Client;

class  AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $user = User::where('phone', $request->phone)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $this->makeToken($user);
    }



    public function register(RegisterRequest $request)
    {
        // dd($request->all());
        $user = User::create($request->validated());

        $sid = getenv("TWILIO_ACCOUNT_SID");
        $token = getenv("TWILIO_AUTH_TOKEN");
        $verificationSid = getenv("TWILIO_VERIFICATION_SID");
        $twilio = new Client($sid, $token);

        $verification = $twilio->verify->v2->services($verificationSid)
            ->verifications
            ->create("+88" . $user->phone, "sms");

        // print($verification->status);
        return response()->json($verification->status);
        // return $this->makeToken($user);
    }

    public function verifyOtp(Request $request)
    {
        $sid = getenv("TWILIO_ACCOUNT_SID");
        $token = getenv("TWILIO_AUTH_TOKEN");
        $verificationSid = getenv("TWILIO_VERIFICATION_SID");
        $twilio = new Client($sid, $token);

        $verification_check = $twilio->verify->v2->services($verificationSid)
            ->verificationChecks
            ->create(
                [
                    "to" => "+88".$request->phone,
                    "code" => $request->otp_code,
                ]
            );

            return response()->json($verification_check->status);
    }

    public function makeToken($user)
    {
        $token = $user->createToken('user-token')->plainTextToken;
        return (new AuthResourse($user))
            ->additional(['meta' => [
                'token' => $token,
                'token-type' => 'bearer'
            ]]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return send_ms('user logout', true, 200);
    }

    public function user(Request $request)
    {
        return AuthResourse::make($request->user());
    }
}
