<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view('welcome');
});

Route::middleware(['auth'])->group(function () {
  // dashboard
  Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
  // user
  Route::group(['prefix' => 'users'], function () {
    Route::get('/', 'UserController@index')->name('users.index');
    Route::get('create', 'UserController@create')->name('users.create');
    Route::post('store', 'UserController@store')->name('users.store');
    Route::get('edit/{id}', 'UserController@edit')->name('users.edit');
    Route::put('update/{id}', 'UserController@update')->name('users.update');
    Route::delete('delete', 'UserController@destroy')->name('users.delete');
    Route::put('status', 'UserController@updateStatus')->name('user.status');
  });
  // profile
  Route::group(['prefix' => 'profile'], function () {
    Route::get('/', 'ProfileController@index')->name('profile.index');
    Route::put('update', 'ProfileController@updateProfile')->name('profile.update');
    Route::put('change-password', 'ProfileController@changePassword')->name('profile.changePassword');
    Route::post('upload-avatar', 'ProfileController@uploadAvatar')->name('profile.uploadAvatar');
  });

  //permisison
  Route::group(['prefix' => 'permissions'], function () {
    Route::get('/', 'PermissionController@index')->name('permissions.index');
    Route::post('setting', 'PermissionController@savePermissionRole')->name('permission.setting');
  });
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
