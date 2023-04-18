<?php

namespace App\Http\Controllers;

use App\Models\Package;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Omnipay\Omnipay;

class PaymentController extends Controller
{
    //
    private $gateway;

    public function index(){
        return view('index');
    }

    public function __construct() {
        $this->gateway = Omnipay::create('PayPal_Rest');
        $this->gateway->setClientId(env('PAYPAL_CLIENT_ID'));
        $this->gateway->setSecret(env('PAYPAL_CLIENT_SECRET'));
        $this->gateway->setTestMode(true);
    }

    public function pay(Request $request)
    {
        $package = Package::find($request->package_id);
        
        Payment::create([
            'amount' => $package['price'],
            'currency' => env('PAYPAL_CURRENCY'),
            'package_name' => $package['package_name'],
            'payment_status' => 'waiting',
            'recruiter_id' => 1,
            'start_date' => Carbon::now(),
            'end_date' => Carbon::now()->addMonths($package['exp_time']),
        ]);

        try {
            $response = $this->gateway->purchase(array(
                'amount' => $package['price'],
                'currency' => env('PAYPAL_CURRENCY'),
                'returnUrl' => url('success'),
                'cancelUrl' => url('error')
            ))->send();

            dd($response);
            if ($response->isRedirect()) {
                $response->redirect();
            }
            else{
                return $response->getMessage();
            }

        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    public function success(Request $request)
    {
        // dd($request);
        if ($request->input('paymentId') && $request->input('PayerID')) {
            $transaction = $this->gateway->completePurchase(array(
                'payer_id' => $request->input('PayerID'),
                'transactionReference' => $request->input('paymentId')
            ));

            $response = $transaction->send();

            if ($response->isSuccessful()) {

                $arr = $response->getData();
                $payment = Payment::where('recruiter_id', '=' , 1)->orderBy('id', 'desc')->first();
                $payment->payment_id = $arr['id'];
                $payment->payer_id = $arr['payer']['payer_info']['payer_id'];
                $payment->payer_email = $arr['payer']['payer_info']['email'];
                $payment->payment_status = $arr['state'];

                $payment->save();
                // Payment::where('recruiter_id', '=' , 1)->update(
                //     [
                //         'payment_id' => $arr['id'],
                //         'payer_id' => $arr['payer']['payer_info']['payer_id'],
                //         'payer_email' => $arr['payer']['payer_info']['email'],
                //         // 'amount' => $arr['transactions'][0]['amount']['total'],
                //         // 'currency' => env('PAYPAL_CURRENCY'),
                //         'payment_status' => $arr['state'],
                //     ]
                // );
                
                return "Payment is Successfull. Your Transaction Id is : " . $arr['id'];

            }
            else{
                return $response->getMessage();
            }
        }
        else{
            return 'Payment declined!!';
        }
    }

    public function error()
    {
        return 'User declined the payment!';   
    }
}
