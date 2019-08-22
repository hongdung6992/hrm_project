<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
  public function index()
  {
    $breadcrumbs = ['parent' => t('dashboard.title')];
    return view('dashboard.index', compact('breadcrumbs'));
  }
}
