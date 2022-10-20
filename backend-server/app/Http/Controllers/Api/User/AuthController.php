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

class AuthController extends Controller
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
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'password' => bcrypt($request->input('password'))
        ]);
        return $this->makeToken($user);
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

    public function user (Request $request){
        Return AuthResourse::make($request->user());
    }
}
