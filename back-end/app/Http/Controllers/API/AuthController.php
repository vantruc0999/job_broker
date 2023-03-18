<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function login(LoginRequest $request)
    {
        $user = User::where('email',$request->email)->first();
        
        if(!$user || !($request->password == $user->password)){
            return response()->json([
                // 'status' => 401,
                'message' => 'Invalid username or password',
            ]);
        }
        else{
            return response([     
                'full_name' => $user->first_name . ' ' . $user->last_name,
                'message' => 'Logged In Successfully',
            ]);
        }
    }
}
