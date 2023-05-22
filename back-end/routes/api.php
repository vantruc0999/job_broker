<?php

use App\Http\Controllers\API\AdminAuthController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CandidateAuthController;
use App\Http\Controllers\API\CategoryExamController;
use App\Http\Controllers\API\CompanyQuestionController;
use App\Http\Controllers\API\EmailNotificationController;
use App\Http\Controllers\API\JobApplicationController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\PackageController;
use App\Http\Controllers\API\PaymentController;
use App\Http\Controllers\API\RecruiterAuthController;
use App\Http\Controllers\API\ResumeController;
use App\Http\Controllers\API\SkillController;
use App\Http\Controllers\SendMailController;
use App\Models\Candidate;
use App\Models\JobApplication;
use App\Models\Payment;
use App\Models\ProgrammingSkills;
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

Route::post('admin/login', [AdminAuthController::class, 'login']);

Route::post('recruiter/login', [RecruiterAuthController::class, 'login']);
Route::post('recruiter/register', [RecruiterAuthController::class, 'register']);

//View all job and view detail a job post
Route::get('job-detail/{id}', [JobController::class, 'show']);
Route::get('jobs', [JobController::class, 'getAllJobsForAllUser']);
Route::get('highlight-job', [JobController::class, 'getHighLightJobs']);

//View all programming skills
Route::get('skills', [SkillController::class, 'index']);
//Route::get('skills', [SkillController::class, 'index']);


Route::get('jobs-by-skills/{id}', [JobController::class, 'getJobsByProgrammingSkills']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::post('logout', [AdminAuthController::class, 'logout']);
        Route::post('accept-job/{id}', [JobController::class, 'approveJobRequest']);
        Route::post('decline-job/{id}', [JobController::class, 'declineJobRequest']);
        Route::post('add-package', [PackageController::class, 'store']);
        Route::post('update-package/{id}', [PackageController::class, 'update']);
        Route::get('package-detail/{id}', [PackageController::class, 'show']);
        Route::get('package', [PackageController::class, 'index']);

        Route::post('add-skill', [SkillController::class, 'store']);
        Route::post('update-skill/{id}', [SkillController::class, 'update']);


        Route::get('waiting-jobs', [JobController::class, 'getAllJobsOnWaiting']);
        Route::get('view-accept-jobs', [JobController::class, 'getAllApprovedJobs']);
        Route::get('view-declined-jobs', [JobController::class, 'getAllDeclinedJobs']);

        Route::get('view-all-payment', [PaymentController::class, 'getAllRecruiterPayment']);
    });

    Route::prefix('recruiter')->group(function () {
        Route::post('logout', [RecruiterAuthController::class, 'logout']);

        Route::post('payment', [PaymentController::class, 'handlePayment']);
        Route::get('payment-history', [PaymentController::class, 'getPaymentHistory']);

        Route::get('jobs', [JobController::class, 'index']);
        Route::post('add-job', [JobController::class, 'handleCreateJob']);
        Route::post('job-update/{id}', [JobController::class, 'handleUpdateJob']);

        Route::post('resume-decline/{id}', [JobApplicationController::class, 'declineApplicationRequest']);
        Route::post('resume-accept/{id}', [JobApplicationController::class, 'acceptApplicationRequest']);
        Route::post('complete-recruitment/{id}', [JobApplicationController::class, 'completeRecruitment']);

        Route::get('get-candidates/{id}', [JobApplicationController::class, 'getAllCandidateByJob']);
        Route::get('get-approved-candidates/{id}', [JobApplicationController::class, 'getAllApprovedCandidateByJob']);
        Route::get('get-declined-candidates/{id}', [JobApplicationController::class, 'getAllDeclinedCandidateByJob']);

        Route::get('package', [PackageController::class, 'index']);
        Route::post('add-question', [CompanyQuestionController::class, 'store']);
        Route::post('update-question/{id}', [CompanyQuestionController::class, 'update']);
        Route::post('delete-question/{id}', [CompanyQuestionController::class, 'destroy']);
        Route::get('questions', [CompanyQuestionController::class, 'index']);
        Route::get('questions-by-category/{id}', [CompanyQuestionController::class, 'getQuestionByCategoryId']);
        Route::get('detail-question/{id}', [CompanyQuestionController::class, 'show']);

        Route::get('categories', [CategoryExamController::class, 'index']);

        Route::post('check-paid-package',[PaymentController::class, 'checkPaidPackage']);
        Route::post('extend-package',[PaymentController::class, 'extendPackage']);

        Route::post('send-mail', [SendMailController::class, 'sendMail']);
        Route::post('create-mail', [EmailNotificationController::class, 'store']);
        Route::post('content-mail', [EmailNotificationController::class, 'showEmailContent']);
    });

    Route::prefix('candidate')->group(function () {
        Route::post('logout', [CandidateAuthController::class, 'logout']);

        Route::get('get-candidate-infor',[CandidateAuthController::class, 'getCandidateInfor']);

        Route::post('create-cv', [ResumeController::class, 'handleCreateResume']);
        Route::get('show-all', [ResumeController::class, 'index']);
        Route::get('show-detail/{id}', [ResumeController::class, 'show']);
        Route::post('update-cv/{id}', [ResumeController::class, 'handleUpdateResume']);
        Route::post('delete-cv/{id}', [ResumeController::class, 'destroy']);
        Route::post('apply-cv', [JobApplicationController::class, 'store']);
        Route::post('public-status-cv/{id}', [ResumeController::class, 'publicStatusResume']); 
        Route::post('private-status-cv/{id}', [ResumeController::class, 'privateStatusResume']); 

        Route::post('view-all-application', [JobController::class, 'viewAllAppliedCompany']);
        Route::post('cancel-application/{id}', [JobController::class, 'cancelApplication']);

        Route::post('recommend-job',[JobController::class, 'recommendJobForCandidate']);
    });
});

// Candidate
Route::post('candidate/register', [CandidateAuthController::class, 'register']);
Route::post('candidate/login', [CandidateAuthController::class, 'login']);
