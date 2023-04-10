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
    public function register(RecruiterRegisterRequest $request)
    {
        $recruiter = Recruiter::create([
            'recruiter_name' => $request->first_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'company_name' => $request->company_name,
        ]);

        //$token = $user->createToken($user->Username.'_Token')->plainTextToken;

        return response([
            'status' => 200,
            'full_name' => $recruiter->recruiter_name,
            'message' => 'Created User Successfully',
        ]);
    }

    public function login(RecruiterLoginRequest $request)
    {
        $recruiter = Recruiter::where('email', $request->email)->first();

        if (!$recruiter || !Hash::check($request->password, $recruiter->password)) {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid username or password',
            ]);
        } else {
            $token = $recruiter->createToken($recruiter->email . 'Token')->plainTextToken;
            return response([
                'status' => 200,
                'recruiter_name' => $recruiter->recruiter_name,
                'message' => 'Logged In Successfully',
                'token' => $token
            ]);
        }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged Out Successfully',
        ]);
    }
}
