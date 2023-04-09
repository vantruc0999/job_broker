<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CandidateAuthController extends Controller
{
    public function register(Request $request){
        $candidate = Candidate::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'birth_day' => $request->birth_day,
            'phone' => $request->phone,
            'address' => $request->address,
            'password' => Hash::make($request->password),
        ]);

        //$token = $user->createToken($user->Username.'_Token')->plainTextToken;

        return response([
            'status' => 200,
            'full_name' => $candidate->first_name . ' ' .$candidate->last_name ,
            'message' => 'Created candidate Successfully',
        ]);
    }

    public function login(Request $request)
    {
        $candidate = Candidate::where('email',$request->email)->first();
        
        if(!$candidate || ! Hash::check($request->password, $candidate->password)){
            return response()->json([
                'status' => 401,
                'message' => 'Invalid username or password',
            ]);
        }
        else{
            $token = $candidate->createToken($candidate->email.'Token')->plainTextToken;
            return response([    
                'status' => 200, 
                'full_name' => $candidate->first_name . ' ' .$candidate->last_name ,
                'message' => 'Logged In Successfully',
                'token' => $token
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
