<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use App\Http\Requests\User\OtpVerifyRequest;
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
            
            $user = User::where('phone', $request->phone)->verifiedUser()->first();
    
            if (!$user || !Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }
    
            return $this->makeToken($user);
        
    }



    public function register(RegisterRequest $request)
    {
        try {
            //code...
            // dd($request->all());
            $user = User::create($request->validated());
    
            $data = twilio_env();
            $res = $data->verifications
                ->create("+88" . $user->phone, "sms");
    
            // print($verification->status);
            return send_ms('Otp Send Success', $res->status,400);
            // return $this->makeToken($user);
        } catch (\Exception $e) {
            //throw $th;
            return send_ms($e->getMessage(),false,$e->getCode());

        }
    }

    public function otpResend(Request $request){
        try {
            $user = User::where('phone',$request->phone)->first();
    
            $data = twilio_env();
            $res = $data->verifications
                ->create("+88" . $user->phone, "sms");
    
            // print($verification->status);
            return send_ms('Otp Send Success', $res->status,400);
            }catch (\Exception $e) {
                //throw $th;
                return send_ms($e->getMessage(),false,$e->getCode());
    
            }
    }

    public function verifyOtp(OtpVerifyRequest $request)
    {

        try {
            //code...
            $data =twilio_env();
            $res =$data->verificationChecks
                 ->create(
                     [
                         "to" => "+88".$request->phone,
                         "code" => $request->otp_code,
                     ]
                 );
     
                 return send_ms('Otp Send Success', $res->status,400);
        } catch (\Exception $e) {
            //throw $th;
            return send_ms($e->getMessage(),false,$e->getCode());
        }
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
        try {
            //code...
            $request->user()->tokens()->delete();
            return send_ms('user logout', true, 200);
        } catch (\Throwable $e) {
            //throw $th;
            return send_ms($e->getMessage(),false,$e->getCode());
        }
    }

    public function user(Request $request)
    {
        return AuthResourse::make($request->user());
    }
}
