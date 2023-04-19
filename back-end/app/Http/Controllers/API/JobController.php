<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobRequest;
use App\Models\Job;
use App\Models\JobSkills;
use App\Models\Payment;
use App\Models\ProgrammingSkills;
use App\Models\Recruiter;
use Carbon\Carbon;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private static function getCompanyName()
    {
        return Recruiter::select('company_name')
            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])->first();
    }

    private static function getAllJobs()
    {
        return Job::select('job_id', 'salary', 'job_name', 'job_location')
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    private static function getExpiredDate()
    {
        $expire_date = Payment::select('end_date')
            ->where('recruiter_id', '=', auth()->user()['recruiter_id'])
            ->orderBy('id', 'desc')
            ->first();
        return $expire_date;
    }

    public function handleCreateJob(Request $request)
    {
        //
        // dd($request);

        $expire_date = self::getExpiredDate();

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
                $job_id = self::storeJob($request);
                self::storeSkill($request->job_skill, $job_id);
                return response([
                    "message" => 'Job has been created successfully',
                ]);
            }
        }
        // Job::create($request->all());
    }

    private static function storeJob($request)
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
                'recruiter_id' => auth()->user()['recruiter_id']
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
    public function show($id)
    {
        //
        $job = Job::where('job_id', '=', $id)->first();
        $job->skills = self::getJobSkills($id);

        return response([
            'job_detail' => $job,
        ]);
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
            "status" => 'Update job ' . $id .' successfully'
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

    private static function deleteJobSkills($job_id){
        JobSkills::where('job_id', '=', $job_id)->delete();
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
}
