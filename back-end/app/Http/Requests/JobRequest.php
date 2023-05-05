<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JobRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'job_name' => 'required',
            'position_name' => 'required',
            'job_start_date' => 'required',
            'job_end_date' => 'required',
            'salary' => 'required',
            'job_location',
            'certificate',
            'language',
            'job_requirement',
            'job_description',
            'benefit',
            'process_step',
            'recruiter_id',
            'payment_status'
        ];
    }
}
