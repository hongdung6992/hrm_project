<?php

namespace App\Http\Controllers;

use App\Http\Requests\PasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
  public function index()
  {
    $breadcrumbs = [
      'parent' => t('user.profile')
    ];
    $currentUser = Auth::user();
    $currentRole = User::findOrFail($currentUser->id)->roles()->get();
    return view('profile.index', compact('breadcrumbs', 'currentUser', 'currentRole'));
  }

  public function updateProfile(Request $request)
  {
    if ($request->ajax()) {
      // validate form profile
      $userRequest = new UserRequest;
      $this->validate(
        $request,
        $userRequest->rules(true, $request->id),
        $userRequest->messages(),
        $userRequest->attributes()
      );
      // update users table

      $user = User::findOrFail($request->id);
      $user->update($request->all());

      return response([
        'id' => $request->id,
        'flash_icon' => 'fa fa-check',
        'flash_level' => 'info',
        'flash_message' => t('user.notify.update_profile_success')
      ]);
    }
  }

  public function changePassword(PasswordRequest $request)
  {
    if ($request->ajax()) {

      $currentPassword = Auth::user()->password;
      if (Hash::check($request->current_password, $currentPassword)) {
        $user = User::findOrFail($request->id);
        $user->password = bcrypt($request->new_password);
        $user->save();
        return response([
          'flash_icon' => 'fa fa-check',
          'flash_level' => 'info',
          'flash_message' => t('user.notify.change_password_success')
        ]);
      } else {
        return response()->json(['status' => 'fails', 'error' => t('validate.incorrect_password')]);
      }
    }
  }

  public function uploadAvatar()
  { }
}
