<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;
use Carbon\Carbon;
use App\Models\Package;

class PaymentController extends Controller
{
    //
    //

    public function pay(Request $request)
    {
        $package = Package::find($request->package_id);

        Payment::create([
            'amount' => $package['price'],
            'currency' => env('PAYPAL_CURRENCY'),
            'package_name' => $package['package_name'],
            'payment_id' => $request->payment_id,
            'payment_status' => $request->status,
            'payer_id' => $request->payer_id,
            'payer_email' => $request->payer_email,
            'recruiter_id' => auth()->user()['recruiter_id'],
            'start_date' => Carbon::now(),
            'end_date' => Carbon::now()->addMonths($package['exp_time']),
        ]);

        return response([
            'status' => 200,
            'message' => 'Payment success'
        ]);
    }
    
    public function getPaymentHistory(){
        $payment_history = Payment::select('payment_id', 'package_name', 'amount', 'currency', 'created_at')
                            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])
                            ->orderBy('id', 'desc')
                            ->get();
        return $payment_history;
    }
}
