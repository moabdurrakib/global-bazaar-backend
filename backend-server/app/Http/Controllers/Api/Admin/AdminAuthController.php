<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminLoginReqeust;
use App\Http\Resources\Admin\AdminAuthResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AdminAuthController extends Controller
{
    //

    public function login(AdminLoginReqeust $request)
    {
        $admin = Admin::where('phone', $request->phone)->first();

        if (!$admin || !Hash::check($request->password, $admin->password)) {
            throw ValidationException::withMessages([
                'phone' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $this->makeToken($admin);
    }



    public function makeToken($admin)
    {
        $token = $admin->createToken('admin-token')->plainTextToken;
        return (new AdminAuthResource($admin))
            ->additional(['meta' => [
                'token' => $token,
                'token-type' => 'bearer'
            ]]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return send_ms('admin logout', true, 200);
    }

    public function user (Request $request){
        Return AdminAuthResource::make($request->user());
    }
}
