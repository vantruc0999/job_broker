<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CandidateAuthController;
use App\Http\Controllers\API\JobApplicationController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\PackageController;
use App\Http\Controllers\API\PaymentController;
use App\Http\Controllers\API\RecruiterAuthController;
use App\Http\Controllers\API\ResumeController;
use App\Models\Candidate;
use App\Models\JobApplication;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Recruiter

Route::post('recruiter/login', [RecruiterAuthController::class, 'login']);
Route::post('recruiter/register', [RecruiterAuthController::class, 'register']);
Route::get('recruiter/package', [PackageController::class, 'index']);
Route::get('job-detail/{id}', [JobController::class, 'show']);
Route::middleware(['auth:sanctum'])->group(function () {

    Route::prefix('recruiter')->group(function () {
        Route::post('logout', [RecruiterAuthController::class, 'logout']);
        Route::post('payment', [PaymentController::class, 'pay']);
        Route::get('payment-history', [PaymentController::class, 'getPaymentHistory']);
        Route::get('jobs', [JobController::class, 'index']);
        Route::post('add-job', [JobController::class, 'handleCreateJob']);
        Route::post('job-update/{id}', [JobController::class, 'handleUpdateJob']);
        Route::post('resume-accept/{id}', [JobApplicationController::class, 'acceptApplicationRequest']);
        Route::post('resume-decline/{id}', [JobApplicationController::class, 'declineApplicationRequest']);
        Route::get('get-candidates/{id}', [JobApplicationController::class, 'getAllCandidateByJob']);
        
    });

    Route::prefix('candidate')->group(function () {
        Route::post('logout', [CandidateAuthController::class, 'logout']);
        Route::post('create-cv', [ResumeController::class, 'handleCreateResume']);
        Route::get('show-all', [ResumeController::class, 'index']);
        Route::get('show-detail/{id}', [ResumeController::class, 'show']);
        Route::post('update-cv/{id}', [ResumeController::class, 'handleUpdateResume']);
        Route::post('delete-cv/{id}', [ResumeController::class, 'destroy']);
        Route::post('apply-cv', [JobApplicationController::class, 'store']);

    });

});

// Candidate
Route::post('candidate/register', [CandidateAuthController::class, 'register']);
Route::post('candidate/login', [CandidateAuthController::class, 'login']);

