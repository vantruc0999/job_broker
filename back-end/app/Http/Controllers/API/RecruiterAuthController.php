<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobRequest;
use App\Http\Requests\RecruiterLoginRequest;
use App\Http\Requests\RecruiterRegisterRequest;
use App\Models\Job;
use App\Models\Recruiter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RecruiterAuthController extends Controller
{
    //
    public function register(RecruiterRegisterRequest $request){
        $user = Recruiter::create([
            'recruiter_name' => $request->first_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'company_name' => $request->company_name,
        ]);

        //$token = $user->createToken($user->Username.'_Token')->plainTextToken;

        return response([
            'status' => 200,
            'full_name' => $user->recruiter_name,
            'message' => 'Created User Successfully',
        ]);
    }

    public function login(RecruiterLoginRequest $request)
    {
        $user = Recruiter::where('email',$request->email)->first();
        
        if(!$user || ! Hash::check($request->password, $user->password)){
            return response()->json([
                'status' => 401,
                'message' => 'Invalid username or password',
            ]);
        }
        else{
            return response([    
                'status' => 200, 
                // 'full_name' => $user->first_name . ' ' . $user->last_name,
                'message' => 'Logged In Successfully',
            ]);
        }
    }
}
