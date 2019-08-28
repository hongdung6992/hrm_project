<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Mail\UserMail;
use App\Role;
use Illuminate\Http\Request;
use App\User;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{

  public function index()
  {
    $breadcrumbs = ['parent' => t('user.title'), 'level_1' => t('user.list')];
    $users = User::with('roles')->get();
    return view('users.index', compact('breadcrumbs', 'users'));
  }

  public function create()
  {
    $breadcrumbs = ['parent' => t('user.title'), 'level_1' => t('user.create')];
    $roles = Role::pluck('name', 'id');
    return view('users.create', compact('breadcrumbs', 'roles'));
  }

  public function store(UserRequest $request)
  {
    $user = new User;
    $password = str_random(8);
    $data = [
      'name' => $request->name,
      'email' => $request->email,
      'phone' => $request->phone,
      'password' => bcrypt($password),
      'active' => $request->active,
      'remember_token' => $request->_token
    ];

    try {
      DB::beginTransaction();
      //create users and role_user table
      $user = User::create($data);
      $user->roles()->attach($request->role_id);
      // send password to email of created user
      Mail::to($request->email)->send(new UserMail([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $password
      ]));
      DB::commit();
      return redirect()->route('users.index')
        ->with([
          'flash_icon' => 'fa fa-check',
          'flash_level' => 'info',
          'flash_message' => t('user.notify.add_success')
        ]);
    } catch (Exception $e) {;
      DB::rollback();
    }
  }

  public function show($id)
  {
    //
  }

  public function edit($id)
  {
    $breadcrumbs = ['parent' => t('user.title'), 'level_1' => t('user.edit')];
    $readonly = 'readonly';
    // get user and role_user to edit
    $user = User::findOrFail($id);
    $role = User::findOrFail($id)->roles()->get();
    // get role to display role select
    $roles = Role::pluck('name', 'id');
    return view('users.edit', compact('breadcrumbs', 'user', 'roles', 'role', 'readonly'));
  }

  public function update(Request $request, $id)
  {
    // validate form user edit
    $userRequest = new UserRequest;
    $this->validate($request, $userRequest->rules(true, $id),  $userRequest->messages(), $userRequest->attributes());

    try { 
      // update users and role_user table
      $user = User::findOrFail($id);
      DB::beginTransaction();
      $user->update($request->all());
      $user->roles()->sync($request->role_id);
      DB::commit();
      return redirect()->route('users.index')
        ->with([
          'flash_icon' => 'fa fa-check',
          'flash_level' => 'info',
          'flash_message' => t('user.notify.edit_success')
        ]);
    } catch (Exception $e) {
      DB::rollback();
    }
  }

  public function destroy(Request $request)
  {
    try {
      DB::beginTransaction();
      if ($request->ajax()) {
        $user = User::findOrFail($request->id);
        $user->delete();
        $user->roles()->detach();
      }
      DB::commit();
      return response([
        'id' => $request->id,
        'flash_icon' => 'fa fa-check',
        'flash_level' => 'info',
        'flash_message' => t('user.notify.delete_success')
      ]);
    } catch (Exception $e) {
      DB::rollback();
    }
  }

  public function updateStatus(Request $request)
  {
    if ($request->ajax()) {
      $user = User::where('id', $request->user_id);
      if ($request->checked == 'true') {
        $user->update(['active' => 1]);
      } else {
        $user->update(['active' => 0]);
      }
    }
  }
}
