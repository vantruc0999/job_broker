<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\HelloMail;
use App\Models\Candidate;
use App\Models\Job;
use App\Models\JobApplication;
use App\Models\ProgrammingSkills;
use App\Models\Recruiter;
use App\Models\Resume;
use App\Models\ResumeSkills;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class JobApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $candidate = "";
        // One account can apply for 1 job post
        $candidate = JobApplication::where([
            ['candidate_id', '=', auth()->user()['candidate_id']],
            ['job_id', '=', $request->job_id]
        ])
            ->first();

        // return response([
        //     'candidate' => $candidate
        // ]); 

        if ($candidate == null) {
            JobApplication::create([
                'candidate_id' => auth()->user()['candidate_id'],
                'resume_id' => $request->resume_id,
                'job_id' => $request->job_id,
                'status' => 'pending'
            ]);
            return response([
                'message' => 'Your application has been applied'
            ]);
        }
        return response([
            'message' => 'you already applied this job',
            // 'candidate' => $candidate
        ]);
    }

    public function acceptApplicationRequest($id)
    {
        $job_application = JobApplication::where('application_id', '=', $id)->first();
        // ->update([
        //     'status' => 'approved'
        // ]);
        $job_application->status = 'approved';
        $job_application->save();

        $candidate = Resume::select('first_name', 'last_name', 'email')
            ->where('resume_id', '=', $job_application->resume_id)
            ->first();
        $full_name = $candidate->first_name . ' ' . $candidate->last_name;
        $recruiter = auth()->user();
        $mailable = new HelloMail($recruiter, $full_name, 1);
        Mail::to($candidate->email)->send($mailable);
        return response([
            'message' => 'Resume has been approved',
            // 'recruiter' => $recruiter
        ]);
    }

    public function declineApplicationRequest($id)
    {
        $job_application = JobApplication::where('application_id', '=', $id)->first();
        // ->update([
        //     'status' => 'approved'
        // ]);
        $job_application->status = 'declined';
        $job_application->save();

        $candidate = Resume::select('first_name', 'last_name', 'email')
            ->where('resume_id', '=', $job_application->resume_id)
            ->first();
        $full_name = $candidate->first_name . ' ' . $candidate->last_name;
        $recruiter = auth()->user();
        $mailable = new HelloMail($recruiter, $full_name, 0);
        Mail::to($candidate->email)->send($mailable);
        return response([
            'message' => 'Resume has been declined',
            // 'recruiter' => $recruiter
        ]);
    }

    private static function getCandidateInfor($candidate_id)
    {
        $candidate_infor = Candidate::select('email', 'first_name', 'last_name')
            ->where('candidate_id', '=', $candidate_id)
            ->first();
        $candidate_infor->fullname = $candidate_infor['first_name'] . ' ' . $candidate_infor['last_name'];
        unset($candidate_infor->first_name);
        unset($candidate_infor->last_name);
        return $candidate_infor;
    }

    private static function getCandidateSkills($resume_id)
    {
        $skills = ResumeSkills::select('skill_name')
            ->where('resume_id', '=', $resume_id)
            ->join('programming_skills', 'programming_skills.skill_id', '=', 'resume_skills.skill_id')
            ->get();
        $skills_list = '';

        $skills->each(function ($item) use (&$skills_list) {
            $skills_list .= $item->skill_name . ' ';
        });

        return $skills_list;
    }

    public function getAllCandidateByJob($job_id)
    {
        $candidates = JobApplication::where('job_id', '=', $job_id)
            ->where('status', '=', 'pending')
            ->get();
        $candidates_list = [];

        if (count($candidates) != 0) {
            foreach ($candidates as $candidate) {
                $candidate_infor = self::getCandidateResume($candidate['resume_id']);
                // $candidate_infor = self::getCandidateInfor($candidate['candidate_id']);
                $skills = self::getCandidateSkills($candidate['resume_id']);

                $candidate_infor->skills = $skills;
                $candidate_infor->resume_id = $candidate['resume_id'];
                $candidate_infor->status = $candidate['status'];
                $candidate_infor->application_id = $candidate['application_id'];
                $candidates_list[] = $candidate_infor;
            }
        }

        return $candidates_list;
    }

    private function getCandidateResume($id)
    {
        $candidate_infor = Resume::select('email', 'first_name', 'last_name')
            ->where('resume_id', '=', $id)
            ->first();
        $candidate_infor->fullname = $candidate_infor['first_name'] . ' ' . $candidate_infor['last_name'];
        unset($candidate_infor->first_name);
        unset($candidate_infor->last_name);
        return $candidate_infor;
    }

    public function getAllApprovedCandidateByJob($job_id)
    {
        $candidates = JobApplication::where('job_id', '=', $job_id)
            ->where('status', '=', 'approved')
            ->get();
        $candidates_list = [];

        if (count($candidates) != 0) {
            foreach ($candidates as $candidate) {
                $candidate_infor = self::getCandidateInfor($candidate['candidate_id']);
                $skills = self::getCandidateSkills($candidate['resume_id']);

                $candidate_infor->skills = $skills;
                $candidate_infor->resume_id = $candidate['resume_id'];
                $candidate_infor->status = $candidate['status'];
                $candidate_infor->application_id = $candidate['application_id'];
                $candidates_list[] = $candidate_infor;
            }
        }

        return $candidates_list;
    }


    public function getAllDeclinedCandidateByJob($job_id)
    {
        $candidates = JobApplication::where('job_id', '=', $job_id)
            ->where('status', '=', 'declined')
            ->get();
        $candidates_list = [];

        if (count($candidates) != 0) {
            foreach ($candidates as $candidate) {
                $candidate_infor = self::getCandidateInfor($candidate['candidate_id']);
                $skills = self::getCandidateSkills($candidate['resume_id']);

                $candidate_infor->skills = $skills;
                $candidate_infor->resume_id = $candidate['resume_id'];
                $candidate_infor->status = $candidate['status'];
                $candidate_infor->application_id = $candidate['application_id'];
                $candidates_list[] = $candidate_infor;
            }
        }

        return $candidates_list;
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
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
