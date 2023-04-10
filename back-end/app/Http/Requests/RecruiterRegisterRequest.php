<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RecruiterRegisterRequest extends FormRequest
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
            'recruiter_name' => [
                'required',
                'max:50',
            ],
            'email' => [
                'bail',
                'required',
                'email:rfc'
            ],
            'phone' => [
                'required',
                // 'numeric',
                'min:10',
                'max:12'
            ],
            'password' => ['required']
        ];
    }
}
