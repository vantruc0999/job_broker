<?php

namespace App\Http\Controllers;

use App\Mail\HelloMail;
use App\Models\Recruiter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendMailController extends Controller
{
    //
    public function sendMail(Request $request)
    {
        $recruiter = auth()->user();
        $mailable = new HelloMail($recruiter, $request->candidate_name, 1);
        Mail::to($request->to_email)->send($mailable);
        return true;
    }

    public function configMail()
    {
        return view('mail.config');
    }

    public function testMail(Request $request)
    {
        //        switch ($request->mail_driver) {
        //            case 'smtp':

        config([
            'mail.default' => 'smtp',
            'mail.mailers.smtp.host' => $request->host,
            'mail.mailers.smtp.port' => $request->port,
            'mail.mailers.smtp.encryption' => $request->encryption,
            'mail.mailers.smtp.username' => $request->username,
            'mail.mailers.smtp.password' => $request->password,
            'mail.from.address' => $request->username,
            'mail.from.name' => 'Van Truc',
        ]);
        //                dd(config('mail'));
        //                break;
        //            case 'ses':
        //                config([
        //                    'mail.default' => 'ses',
        //                    'mail.from.address' => $request->mail_address,
        //                    'mail.from.name' => $request->mail_name,
        //                    'services.ses.key' => $request->mail_key,
        //                    'services.ses.secret' => $request->mail_secret,
        //                    'services.ses.region' => $request->mail_region
        //                ]);
        //                break;
        //        }

        $user = Recruiter::find(3);
        $mailable = new HelloMail($user);
        Mail::to("thanhquang1310@gmail.com")
            ->send($mailable);
        return redirect()->back()->with('success', 'Success');
    }
}
