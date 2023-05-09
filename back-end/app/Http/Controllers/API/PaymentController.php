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
            // 'currency' => env('PAYPAL_CURRENCY'),
            'currency' => 'USD',
            'package_id' => $request->package_id,
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

    public function getPaymentHistory()
    {
        $payment_history = Payment::select('payment_id', 'package_name', 'amount', 'currency', 'created_at')
            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->get();
        return $payment_history;
    }

    public function checkPaidPackage(Request $request)
    {
        $paidPackage = Payment::where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->first();
        $end_date = $paidPackage->end_date;
        // return $paidPackage;
        $curr_date = Carbon::now();

        if ($curr_date->gt($end_date))
            return response([
                "message" => "Expired"
            ]);
        else {
            if ($request->package_id === $paidPackage->package_id) {
                return response([
                    "message" => "Extend"
                ]);
            }
        }
    }

    public function extendPackage(Request $request)
    {
        $payment = Payment::where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->first();

        $package = Package::where('package_id', '=', $payment['package_id'])->first();

        $end_date = Carbon::parse($payment['end_date']);

        Payment::create([
            'amount' => $package['price'],
            'currency' => 'USD',
            'package_id' => $payment['package_id'],
            'package_name' => $package['package_name'],
            'payment_id' => $request->payment_id,
            'payment_status' => $request->payment_status,
            'payer_id' => $request->payer_id,
            'payer_email' => $request->payer_email,
            'recruiter_id' => auth()->user()['recruiter_id'],
            'start_date' => $payment['end_date'],
            'end_date' => $end_date->addMonths($package['exp_time']),
        ]);

        return response([
            // 'curr_date' => Carbon::now(),
            // 'end_date' => $payment['end_date'],
            // 'exp_time' => $package['exp_time']
            'Message' => 'Extend successfully'
        ]);
    }
}
