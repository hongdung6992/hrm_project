<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{

  public function index()
  {
    $breadcrumbs = [
      'parent' => t('user.title'),
      'level_1' => t('user.list')
    ];

    $users = User::with('roles')->get();
    return view('users.index', compact('breadcrumbs', 'users'));
  }

  public function create()
  {
    $breadcrumbs = [
      'parent' => t('user.title'),
      'level_1' => t('user.create')
    ];
    
    $roles = Role::pluck('name', 'id');
    return view('users.create', compact('breadcrumbs', 'roles'));
  }
  

  public function store(Request $request)
  {
    //
  }

  public function show($id)
  {
    //
  }

  public function edit()
  {
    $breadcrumbs = [
      'parent' => t('user.title'),
      'level_1' => t('user.edit')
    ];
    return view('users.edit', compact('breadcrumbs'));
  }

  public function update(Request $request, $id)
  {
    //
  }

  public function destroy($id)
  {
    //
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
