<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
  use AuthenticatesUsers;

  protected $redirectTo = '/dashboard';

  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }

  public function login(LoginRequest $request)
  {
    $input = $request->only(array_keys($request->rules()));
    if (Auth::attempt($input)) {
      echo 'thanh cong';
      return redirect()->route('dashboard')->with(['flash_icon' => 'fa fa-check', 'flash_level' => 'info', 'flash_message' => t('auth.notify.success')]);
    } else {
      return redirect()->back()->with(['flash_icon' => 'fa fa-exclamation-triangle', 'flash_level' => 'danger', 'flash_message' => t('auth.notify.fail')]);
    }
  }

  public function logout()
  {
    Auth::logout();
    return redirect()->route('login');
  }
}
