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

Route::get('/', function () {
  return view('welcome');
});

// Route::middleware(['auth'])->group(function () {
Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
Route::group(['prefix' => 'users'], function () {
  Route::get('/', 'UserController@index')->name('users.index');
  Route::get('create', 'UserController@create')->name('users.create');
  Route::post('store', 'UserController@store')->name('users.store');
  Route::get('edit', 'UserController@edit')->name('users.edit');
  Route::put('update', 'UserController@update')->name('users.update');
});
// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
