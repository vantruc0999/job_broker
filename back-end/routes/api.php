<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CandidateAuthController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\RecruiterAuthController;
use App\Http\Controllers\API\ResumeController;
use App\Models\Candidate;
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

Route::post('recruiter/login', [RecruiterAuthController::class, 'login']);
Route::post('recruiter/register', [RecruiterAuthController::class, 'register']);
Route::post('recruiter/add-job', [JobController::class, 'store']);


Route::post('candidate/register', [CandidateAuthController::class, 'register']);
Route::post('candidate/login', [CandidateAuthController::class, 'login']);



Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('candidate/logout', [CandidateAuthController::class, 'logout']);
    Route::post('candidate/create-cv', [ResumeController::class, 'handleCreateResume']);
    Route::get('candidate/show-all', [ResumeController::class, 'index']);
    Route::get('candidate/show-detail/{id}', [ResumeController::class, 'show']);
    Route::post('candidate/update-cv/{id}', [ResumeController::class, 'handleUpdateResume']);
    Route::post('candidate/delete-cv/{id}', [ResumeController::class, 'destroy']);
});
