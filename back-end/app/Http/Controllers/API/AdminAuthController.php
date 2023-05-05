<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    public function login(Request $request)
    {
        $admin = Admin::where('email',$request->email)->first();
        
        if(!$admin || ! Hash::check($request->password, $admin->password)){
            return response()->json([
                'status' => 401,
                'message' => 'Invalid username or password',
                
            ]);
        }
        else{
            $token = $admin->createToken($admin->email.'Token')->plainTextToken;
            return response([    
                'status' => 200, 
                'message' => 'Logged In Successfully',
                'token' => $token,
                'role' => 'admin'
            ]);
        }
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged Out Successfully', 
        ]);
    }
}
