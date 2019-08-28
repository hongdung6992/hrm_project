<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
  public function rules($update = false, $id = null)
  {
    $commun = [
      'name' => 'required',
      'email' => 'nullable|required|email|unique:users,email,' . $id,
      'phone' => 'nullable|regex:/^([0-9\s\-\+\(\)]*)$/|min:10'
    ];

    if ($update) return $commun;
    return array_merge($commun, [
      'email' => 'required|email|unique:users'
    ]);
  }

  public function attributes()
  {
    return [
      'name' => t('user.name'),
      'email' => t('user.email'),
      'phone' => t('user.phone')
    ];
  }

  public function messages()
  {
    return [
      '*.required' => ':attribute ' . t('validate.required'),
      'email.email' => ':attribute ' . t('validate.invalid'),
      'email.unique' => ':attribute ' . t('validate.exist'),
      'phone.regex' => ':attribute ' . t('validate.invalid'),
      'phone.min' => ':attribute ' . t('validate.invalid')
    ];
  }
}
