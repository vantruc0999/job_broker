<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function register(RegisterRequest $request){
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
            'password' => Hash::make($request->password),
        ]);

        //$token = $user->createToken($user->Username.'_Token')->plainTextToken;

        return response([
            'status' => 200,
            'full_name' => $user->first_name . ' ' . $user->last_name,
            'message' => 'Created User Successfully',
        ]);
    }

    public function login(LoginRequest $request)
    {
        $user = User::where('email',$request->email)->first();
        
        if(!$user || ! Hash::check($request->password, $user->password)){
            return response()->json([
                'status' => 401,
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
