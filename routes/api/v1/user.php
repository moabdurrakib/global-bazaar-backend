<?php

use App\Http\Controllers\Api\User\AuthController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function(){
    Route::post('/login','login');
    Route::post('/register','register');
    Route::post('/otp-verify','verifyOtp'); 
    Route::post('/otp-resend','otpResend'); 
});



Route::middleware('auth:user-api')->group(function () {

    Route::controller(AuthController::class)->group(function(){
        Route::post('/logout','logout');
        Route::get('/me','user');
    });
});
