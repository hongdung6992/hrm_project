<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Permission;
use App\Role;

class PermissionController extends Controller
{
  public function index()
  {
    $breadcrumbs = [
      'parent' => t('permission.title'),
      'level_1' => t('permission.perms')
    ];
    $permissions = Permission::all();
    $roles = Role::all();
    return view('permissions.index', compact('permissions', 'roles', 'breadcrumbs'));
  }

  public function savePermissionRole(Request $request)
  {
    $role = Role::findOrFail($request->role_id);
    $permission = Permission::findOrFail($request->permission_id);
    if ($request->ajax()) {
      if ($request->checked == "true") {
        $role->permissions()->attach($permission);
      } else {
        $role->permissions()->detach($permission);
      }
    }
  }
}
