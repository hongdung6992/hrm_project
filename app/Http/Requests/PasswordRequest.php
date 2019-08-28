<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PasswordRequest extends FormRequest
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
   * @return array
   */
  public function rules()
  {
    return [
      'current_password' => 'required',
      'new_password' => 'required|different:current_password',
      'confirm_password' => 'required|same:new_password'
    ];
  }

  public function attributes()
  {
    return [
      'current_password' => t('user.current_password'),
      'new_password' => t('user.new_password'),
      'confirm_password' => t('user.confirm_password')
    ];
  }

  public function messages()
  {
    return [
      '*.required' => ':attribute ' . t('validate.required'),
      'new_password.different' => ':attribute ' . t('validate.different', ['param' => strtolower(t('user.current_password'))]),
      'confirm_password.same' => ':attribute ' . t('validate.confirm', ['param' => strtolower(t('user.new_password'))])
    ];
  }
}
