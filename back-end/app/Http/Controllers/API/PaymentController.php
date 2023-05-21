<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Payment;
use Carbon\Carbon;
use App\Models\Package;
use App\Models\Recruiter;
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Payout;
use PayPal\Api\PayoutSenderBatchHeader;
use PayPal\Api\Currency;
use DateTime;

class PaymentController extends Controller
{
    //
    //
    private static function addMoneyToReceiver(Request $request)
    {
        // Initialize PayPal API context
        $apiContext = new ApiContext(
            new OAuthTokenCredential(
                config('paypal.client_id'),
                config('paypal.secret')
            )
        );

        // Retrieve the receiver's PayPal account email
        $receiverEmail = 'sb-oka6c25403897_api1.business.example.com';

        // Retrieve the payment amount
        $amount = 100;

        // Create a Payout object
        $payout = new Payout();

        // Set the sender batch header
        $senderBatchHeader = new PayoutSenderBatchHeader();
        $senderBatchHeader->setSenderBatchId(uniqid())
            ->setEmailSubject('Adding money to PayPal account');
        $payout->setSenderBatchHeader($senderBatchHeader);

        // Set the receiver details
        $receiver = new \PayPal\Api\PayoutItem();
        $receiver->setRecipientType('EMAIL')
            ->setReceiver($receiverEmail)
            ->setAmount(new Currency('USD', $amount));
        $payout->setItems([$receiver]);

        // Create the payout
        $payout->create(null, $apiContext);

        // return response()->json(['message' => 'Money added successfully']);
    }


    private static function pay(Request $request)
    {   
        // self::addMoneyToReceiver($request);
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

        // return response([
        //     'status' => 200,
        //     'message' => 'Payment success'
        // ]);
    }

    public function getPaymentHistory()
    {

        $payment_history = Payment::select('payment_id', 'package_name', 'amount', 'created_at', 'currency', 'start_date', 'end_date')
            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->get();
        // foreach ($payment_history as $item) {
        //     // $item->created_at = Carbon::parse($item->created_at)->toDateTimeString();
        //     // $item->created_at = Carbon::createFromFormat('Y-m-d',  $item->created_at)->toDateTime();
        //     // $datetime = new DateTime($item->created_at);
        //     // $item->created_at = $datetime->format('Y-m-d H:i:s');
        //     $item->created_at = Carbon::createFromFormat('Y-m-d\TH:i:s.u\Z', $item->created_at)->format('Y-m-d H:i:s');
        // }
        return $payment_history;
    }

    public function handlePayment(Request $request)
    {
        $paidPackage = Payment::where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->first();

        $end_date = $paidPackage->end_date ?? null;
        // return $paidPackage;
        $curr_date = Carbon::now();

        if ($curr_date->gt($end_date) || $paidPackage == null) {
            self::pay($request);
            return response([
                "message" => "Payment success"
            ]);
        } else {
            self::extendPackage($request);

            return response([
                "message" => "Payment success",
                "message 2" => "Your new package will start when your old package expires"
            ]);
        }
    }

    private static function extendPackage(Request $request)
    {
        $package_id = $request->package_id;

        $payment = Payment::where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->first();

        $package = Package::where('package_id', '=', $package_id)->first();

        $end_date = Carbon::parse($payment['end_date']);

        Payment::create([
            'amount' => $package['price'],
            'currency' => 'USD',
            'package_id' => $package['package_id'],
            'package_name' => $package['package_name'],
            'payment_id' => $request->payment_id,
            'payment_status' => $request->payment_status,
            'payer_id' => $request->payer_id,
            'payer_email' => $request->payer_email,
            'recruiter_id' => auth()->user()['recruiter_id'],
            'start_date' => Carbon::parse($payment['end_date'])->addSecond(),
            'end_date' => $end_date->addMonths($package['exp_time'])->addSecond(),
        ]);

        // return response([
        //     // 'curr_date' => Carbon::now(),
        //     // 'end_date' => $payment['end_date'],
        //     // 'exp_time' => $package['exp_time']
        //     'Message' => 'Extend successfully'
        // ]);
    }

    private static function getRecruiterAndCompanyName($recruiter_id){
        $recruiter = Recruiter::select('company_name', 'recruiter_name')
                                ->where('recruiter_id', '=', $recruiter_id)
                                ->first();
        return $recruiter;
    }

    public function getAllRecruiterPayment(){
        $history_payment = Payment::select('payment_id', 'payer_email', 'amount', 'currency', 'payment_status', 'package_name', 'recruiter_id', 'start_date', 'end_date', 'created_at')
                                    ->get();
        foreach($history_payment as $item){
            $recruiter = self::getRecruiterAndCompanyName($item['recruiter_id']);
            $item->recruiter_name = $recruiter['recruiter_name'];
            $item->company_name = $recruiter['company_name'];
        }
        return $history_payment;
    }
}
