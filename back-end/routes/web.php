<?php

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\SendMailController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });


Route::post('pay', [PaymentController::class, 'pay'])->name('payment');
Route::get('success', [PaymentController::class, 'success']);
Route::get('/', [PaymentController::class, 'index']);
Route::get('error', [PaymentController::class, 'error']);
Route::get('send-mail', [SendMailController::class, 'sendMail']);

Route::post('test-mail', [SendMailController::class, 'testMail']);
Route::get('config-mail', [SendMailController::class, 'configMail']);
