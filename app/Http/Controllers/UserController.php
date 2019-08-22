<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

  public function index()
  {
    $breadcrumbs = [
      'parent' => t('user.title'),
      'level_1' => t('user.list')
    ];
    return view('users.index', compact('breadcrumbs'));
  }

  public function create()
  {
    $breadcrumbs = [
      'parent' => t('user.title'),
      'level_1' => t('user.create')
    ];
    return view('users.create', compact('breadcrumbs'));
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
}
