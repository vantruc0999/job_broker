<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobRequest;
use App\Models\Job;
use App\Models\JobApplication;
use App\Models\JobSkills;
use App\Models\Package;
use App\Models\Payment;
use App\Models\ProgrammingSkills;
use App\Models\Recruiter;
use App\Models\Resume;
use App\Models\ResumeSkills;
use Carbon\Carbon;
use Illuminate\Console\Application;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public static function getAllJobsForAllUser()
    {
        $jobs = Job::select('job_id', 'salary', 'job_name', 'job_location', 'recruiter_id')
            ->where('status', '=', 'approved')
            ->orderBy('job_id', 'desc')
            ->get();
        if (count($jobs) != 0) {
            foreach ($jobs as $job) {
                $company_name = self::getAllCompanyName($job['recruiter_id']);
                $company_image = self::getCompanyImage($job['recruiter_id']);
                $job->company_name = $company_name;
                $job->company_image = $company_image;
                unset($job->recruiter_id);
            }
        }
        return response([
            'jobs' => $jobs
        ]);
    }

    private static function getCompanyName()
    {
        return Recruiter::select('company_name')
            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])->first();
    }

    private static function getCompanyImage($recruiter_id)
    {
        return Recruiter::select('image')
            ->where('recruiter_id', '=', $recruiter_id)->first()['image'];
    }


    private static function getAllCompanyName($recruiter_id)
    {
        $company = Recruiter::select('company_name')
            ->where('recruiter_id', '=', $recruiter_id)->first();
        return $company['company_name'];
    }

    private static function getAllJobs()
    {
        return Job::select('job_id', 'salary', 'job_name', 'job_location', 'job_start_date', 'job_end_date', 'status')
            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('job_id', 'desc')
            ->get();
    }

    public function index()
    {
        //
        $company = self::getCompanyName();

        $jobs = self::getAllJobs();

        $jobs->each(function ($job) use ($company) {
            $job->company_name = $company['company_name'];
        });

        return response(
            [
                'jobs' => $jobs,
            ]
        );
    }

    public function getAllJobsOnWaiting()
    {
        $jobs = Job::select('job_id', 'salary', 'job_name', 'job_location', 'recruiter_id', 'job.status')
            ->where('status', '=', 'waiting')
            ->orderBy('job_id', 'desc')
            ->get();
        if (count($jobs) != 0) {
            foreach ($jobs as $job) {
                $company_name = self::getAllCompanyName($job['recruiter_id']);
                $job->company_name = $company_name;
                unset($job->recruiter_id);
            }
        }
        return response([
            'jobs' => $jobs
        ]);
    }

    public function getAllApprovedJobs()
    {
        $jobs = Job::select('job_id', 'salary', 'job_name', 'job_location', 'recruiter_id', 'status')
            ->where('status', '=', 'approved')
            ->orderBy('job_id', 'desc')
            ->get();
        if (count($jobs) != 0) {
            foreach ($jobs as $job) {
                $company_name = self::getAllCompanyName($job['recruiter_id']);
                $job->company_name = $company_name;
                unset($job->recruiter_id);
            }
        }
        return response([
            'jobs' => $jobs
        ]);
    }

    public function getAllDeclinedJobs()
    {
        $jobs = Job::select('job_id', 'salary', 'job_name', 'job_location', 'recruiter_id', 'status')
            ->where('status', '=', 'declined')
            ->orderBy('job_id', 'desc')
            ->get();
        if (count($jobs) != 0) {
            foreach ($jobs as $job) {
                $company_name = self::getAllCompanyName($job['recruiter_id']);
                $job->company_name = $company_name;
                unset($job->recruiter_id);
            }
        }
        return response([
            'jobs' => $jobs
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    private static function getExpiredDate()
    {
        $expire_date = Payment::select('end_date', 'package_name', 'start_date')
            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->get();
        $expire = null;
        // $skills->each(function ($skill) use (&$skills_name) {
        //     $skills_name[] = $skill['skill_name'];
        // });
        $expire_date->each(function ($item) use (&$expire) {
            if (Carbon::now()->gte($item['start_date'])) {
                $expire = $item;
                return false;
            }
            // if(|| Carbon::now()->gte($item['end_date']))
        });
        return $expire;
    }

    public function handleCreateJob(Request $request)
    {
        //
        // dd($request);

        $expire_date = self::getExpiredDate();
        // return $expire_date;
        if (!$expire_date) {
            return response([
                "message" => 'You have not bought any package'
            ]);
        } else {
            $curr_date = Carbon::now();
            $is_expired =  $curr_date->lte($expire_date['end_date']);
            if (!$is_expired) {
                return response([
                    "message" => 'Your package has been expired'
                ]);
            } else {
                if (Carbon::createFromDate($request->job_start_date)->gte($curr_date)) {
                    $job_id = self::storeJob($request, $expire_date['package_name']);
                    self::storeSkill($request->job_skill, $job_id);
                    return response([
                        "message" => 'Job has been created successfully',
                        // "curr_date" => $curr_date,
                        // "start_date" => Carbon::createFromDate($request->job_start_date),
                        // "compare" => $curr_date->gte(Carbon::createFromDate($request->job_start_date))
                    ]);
                }
                return response([
                    "message" => "Job start date must be greater or equal today",
                ]);
            }
        }
        // Job::create($request->all());
    }

    private static function storeJob($request, $package_name)
    {

        $job = Job::create(
            [
                'job_name' => $request->job_name,
                'position_name' => $request->position_name,
                'job_start_date' => $request->job_start_date,
                'job_end_date' => $request->job_end_date,
                'salary' => $request->salary,
                'job_location' => $request->job_location,
                'language' => $request->language,
                'job_requirement' => $request->job_requirement,
                'job_description' => $request->job_description,
                'benefit' => $request->benefit,
                'recruiter_id' => auth()->user()['recruiter_id'],
                'status' => 'waiting',
                'job_package_name' => $package_name
            ]
        );
        return $job['job_id'];
    }

    private static function storeSkill($skills, $job_id)
    {
        if (count($skills) != 0) {
            foreach ($skills as $skill) {
                JobSkills::create(
                    [
                        'skill_id' => $skill,
                        'job_id' => $job_id
                    ]
                );
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public static function show($id, $rcm = 0)
    {
        //
        $job = Job::where('job_id', '=', $id)->first();
        $job->skills = self::getJobSkills($id);
        $company_name = Recruiter::select('company_name')
            ->where('recruiter_id', '=', $job->recruiter_id)
            ->first()->company_name;
        $company_image = self::getCompanyImage($job['recruiter_id']);
        $job->company_name = $company_name;
        $job->company_image = $company_image;
        // $skills = JobSkills::where('job_id', '=', $id)->get();
        // $job->skills = $skills;
        $skills = self::getJobSkillByJobId($job->job_id);
        if ($rcm != 0) {
            return [
                'job_detail' => $job,
                'skills' => $skills
            ];
        }
        return response([
            'job_detail' => $job,
            'skills' => $skills
        ]);
    }

    private static function getJobSkillByJobId($job_id)
    {
        $skills = JobSkills::select('skill_name', 'job_skills.skill_id')
            ->join('programming_skills', 'programming_skills.skill_id', '=', 'job_skills.skill_id')
            ->where('job_id', '=', $job_id)
            ->get();
        // $skill_name = [];
        // $skills->each(function ($item) use (&$skill_name) {
        //     $skill_name[] = $item->skill_name;
        // });
        return $skills;
    }

    private static function getJobSkills($job_id)
    {
        $skills = JobSkills::select('skill_name')
            ->join('programming_skills', 'programming_skills.skill_id', '=', 'job_skills.skill_id')
            ->where('job_id', '=', $job_id)
            ->get();
        $skills_name = [];
        $skills->each(function ($skill) use (&$skills_name) {
            $skills_name[] = $skill['skill_name'];
        });
        return $skills_name;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function handleUpdateJob(Request $request, $id)
    {
        //
        self::deleteJobSkills($id);
        self::storeSkill($request->job_skill, $id);
        self::updateJob($request, $id);
        return response([
            "status" => 'Update job ' . $id . ' successfully'
        ]);
    }

    private static function updateJob($request, $job_id)
    {
        Job::where('job_id', '=', $job_id)->update(
            [
                'job_name' => $request->job_name,
                'position_name' => $request->position_name,
                'job_start_date' => $request->job_start_date,
                'job_end_date' => $request->job_end_date,
                'salary' => $request->salary,
                'job_location' => $request->job_location,
                'language' => $request->language,
                'job_requirement' => $request->job_requirement,
                'job_description' => $request->job_description,
                'benefit' => $request->benefit,
            ]
        );
    }

    private static function deleteJobSkills($job_id)
    {
        JobSkills::where('job_id', '=', $job_id)->delete();
    }

    public function approveJobRequest($job_id)
    {
        Job::where('job_id', '=', $job_id)
            ->update([
                'status' => 'approved'
            ]);
        return response([
            'message' => 'Job Post has been approved'
        ]);
    }

    public function declineJobRequest($job_id)
    {
        Job::where('job_id', '=', $job_id)
            ->update([
                'status' => 'decline'
            ]);
        return response([
            'message' => 'Job Post has been declined'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    // private static function getSkillNameBySkillId($id){
    //     return ProgrammingSkills::select('skill_name')->where('skill_id', '=', $id)->first()['skill_name'];
    // }

    public static function getJobsByProgrammingSkills($skill_id)
    {

        $jobs = Job::select('job.job_id', 'salary', 'job_name', 'job_location', 'recruiter_id')
            ->join('job_skills', 'job.job_id', '=', 'job_skills.job_id')
            ->where('skill_id', '=', $skill_id)
            ->where('status', '=', 'approved')
            ->orderBy('job_id', 'desc')
            ->get();
        if (count($jobs) != 0) {
            foreach ($jobs as $job) {
                $company_name = self::getAllCompanyName($job['recruiter_id']);
                $job->company_name = $company_name;
                unset($job->recruiter_id);
            }
        }
        return $jobs;
    }

    public function viewAllAppliedCompany()
    {
        $jobs = JobApplication::select('job_application.job_id', 'job_name', 'job_location', 'recruiter_id', 'resume_id', 'job_application.status', 'application_id')
            ->join('job', 'job.job_id', '=', 'job_application.job_id')
            ->where('candidate_id', '=', auth()->user()['candidate_id'])
            ->where('application_completed', '=', 0)
            // ->where('job_application.status', '=', 'pending')
            ->get();

        if (count($jobs) != 0) {
            foreach ($jobs as $job) {
                $company_name = self::getAllCompanyName($job['recruiter_id']);
                $job->company_name = $company_name;
                unset($job->recruiter_id);
            }
        }

        return $jobs;
    }

    public function cancelApplication($application_id)
    {
        $application = JobApplication::where('application_id', '=', $application_id)->first();

        if ($application['status'] == 'approved')
            return response([
                "message" => 'Your application has been considered'
            ]);

        JobApplication::where('application_id', '=', $application_id)->delete();

        return response([
            "message" => 'Your application has been canceled'
        ]);
    }

    public function recommendJobForCandidate()
    {
        $main_cv_id = auth()->user()['main_cv_id'];

        if ($main_cv_id == null)
            return self::getAllJobsForAllUser();

        $skills = ResumeSkills::select('skill_id')
            ->where('resume_id', '=', $main_cv_id)
            ->get();

        $recJob = collect([]);

        foreach ($skills as $skill) {
            $job_temp = self::getJobsByProgrammingSkills($skill->skill_id);
            $recJob = $recJob->merge($job_temp);
        }
        return $recJob->unique('job_id');
    }

    public function getHighLightJobs()
    {
        $jobs = Job::select('job_id', 'salary', 'job_name', 'job_location', 'recruiter_id')
            ->where('status', '=', 'approved')
            ->where('job_package_name', '=', 'PREMIUM')
            ->orderBy('job_id', 'desc')
            ->get();
        if (count($jobs) != 0) {
            foreach ($jobs as $job) {
                $company_name = self::getAllCompanyName($job['recruiter_id']);
                $company_image = self::getCompanyImage($job['recruiter_id']);
                $job->company_name = $company_name;
                $job->company_image = $company_image;
                unset($job->recruiter_id);
            }
        }
        return response([
            'jobs' => $jobs
        ]);
    }

    private static function getResumeBySkill($skill_id)
    {
        $relevantResume = Resume::select('resume.resume_id', 'first_name', 'last_name', 'phone', 'image')
            ->where('public_status', '=', 1)
            ->join('resume_skills', 'resume_skills.resume_id', '=', 'resume.resume_id')
            ->where('skill_id', '=', $skill_id)
            ->get()
            ;
        return $relevantResume;
    }

    public function recommendCandidateByJob($job_id)
    {
        $job_detail = self::show($job_id, 1);
        // $rcm_candidate = [];
        // foreach($job_detail['skills'] as $skill)
        // {
        //     $rcm_candidate[] = self::getResumeBySkill($skill['skill_id']);
        // }

        $recCandidate = collect([]);

        foreach ($job_detail['skills'] as $item) {
            $can_temp = self::getResumeBySkill($item['skill_id']);
            $recCandidate = $recCandidate->merge($can_temp);
        }
        $job_detail['recCan'] =  $recCandidate->unique('resume_id');
        return $job_detail;
    }

    public function searchJobTitle(Request $request){
        $jobs = Job::select('job_id', 'salary', 'job_name', 'job_location', 'recruiter_id')
            ->where('job_name', 'like', "%$request->title%")
            ->orderBy('job_id', 'desc')
            ->get();
        return $jobs;
    }
}
