<?php

namespace App\Mail;

use App\Models\Recruiter;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class HelloMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $recruiter;
    private $is_approved;
    private $candidate_name;
    public function __construct(Recruiter $recruiter, $candidate_name, $is_approved)
    {
        //
        $this->recruiter = $recruiter;
        $this->candidate_name = $candidate_name;
        $this->is_approved = $is_approved;
        // $this->queue = "email";
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Kết quả tuyển dụng',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        if($this->is_approved == 1)
            $view = 'mail.approved';
        else
            $view = 'mail.declined';
        return new Content(
            view: $view,
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }

    public function build()
    {
        if($this->is_approved == 1)
            $view = 'mail.approved';
        else
            $view = 'mail.declined';
        return $this->view($view)
            ->subject('Hello may ku')
            ->with([
                'recruiter' => $this->recruiter,
                'candidate_name' => $this->candidate_name,
            ]);
    }
}
