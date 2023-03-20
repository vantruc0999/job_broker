<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;


class RegisterRequest extends FormRequest
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
            'first_name' => [
                'required',
                'max:50',
            ],
            'last_name' => [
                'required',
                'max:50',
            ],
            'email' => [
                'bail',
                'required',
                'unique:App\Models\User,email',
                'email:rfc'
            ],
            'phone' => [
                'required',
                // 'numeric',
                'min:10',
                'max:12'
            ],
            'address' => ['max:255'],
            'password' => ['required']
        ];
    }
}
