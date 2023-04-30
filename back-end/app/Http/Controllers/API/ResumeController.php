<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use App\Models\Job;
use App\Models\JobApplication;
use App\Models\Resume;
use App\Models\ResumeSkills;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $candidate_id = auth()->user()['candidate_id'];
        $resume = Resume::select('resume_name', 'resume_id', 'public_status')
                        ->where('candidate_id', $candidate_id)->get();
        // $resume_id = [];
        // $resume->each(function($item) use (&$resume_id){
        //     $resume_id[] = $item->resume_id;
        // });
        // return $skill_name;
        return response([
            'resume' => $resume,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function handleCreateResume(Request $request)
    {
        //
        // $idCandidate = auth()->user()['candidate_id'];
        $resume_name = $request->resume['resume_name'];
        $education = $request->resume['education'];
        $certificate = $request->resume['certificate'];
        $image = $request->resume['image'];
        $template = $request->resume['template'];
        $experience_project = $request->resume['experience_project'];
        $experience_company = $request->resume['experience_company'];
        $skills = $request->resume['skills'];

        $id_resume = self::storeResume($resume_name, $education, $certificate, $image, $template);
        self::storeExperience($experience_project, $id_resume, "experience_project");
        self::storeExperience($experience_company, $id_resume, "experience_company");
        self::storeResumeSkills($skills, $id_resume);
        return response([
            'status' => 200,
            'message' => 'Create resume successfully',
            // 'user' => auth()->user()
        ]);
    }

    private static function storeExperience($experience, $resume_id, $category)
    {
        if ($category === 'experience_project') {
            if (count($experience) != 0) {
                foreach ($experience as $item) {
                    Experience::create([
                        'responsibility' => $item['responsibility'],
                        'project_name' => $item['project_name'],
                        'achievement' => $item['achievement'],
                        'experience_start' => $item['experience_start'],
                        'experience_end' => $item['experience_end'],
                        'resume_id' => $resume_id,
                        'exp_category' => $category
                    ]);
                }
                return 1;
            }
        } else if ($category === 'experience_company') {
            // return $experience;
            if (count($experience) != 0) {
                foreach ($experience as $item) {
                    Experience::create([
                        'position' => $item['position'],
                        'company_name' => $item['company_name'],
                        'achievement' => $item['achievement'],
                        'experience_start' => $item['experience_start'],
                        'experience_end' => $item['experience_end'],
                        'resume_id' => $resume_id,
                        'exp_category' => $category
                    ]);
                }
                return 1;
            }
        } else return 0;
    }

    private static function storeResumeSkills($skill, $resume_id)
    {
        if (count($skill) != 0) {
            foreach ($skill as $item) {
                ResumeSkills::create([
                    'resume_id' => $resume_id,
                    'skill_id' => $item
                ]);
            }
        }
    }

    private static function storeResume($resume_name, $education, $certificate, $image, $template)
    {
        $resume = Resume::create([
            'resume_name' => $resume_name,
            'education' => $education,
            'certificate' => $certificate,
            'image' => $image,
            'template' => $template,
            'created_at' => date("Y-m-d h:i:s"),
            'candidate_id' => auth()->user()['candidate_id']
        ]);
        return $resume['resume_id'];
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
        $resume = self::getResumeById($id);
        $experience = self::getExperienceById($id);
        $skill = self::getResumeSkillById($id);
        return response([
            'resume' => $resume,
            'experience_project' => $experience['experience_project'],
            'experience_company' => $experience['experience_company'],
            'skill' => $skill
        ]);
    }

    private static function getResumeById($resume_id)
    {
        $resume = Resume::where('resume_id', '=', $resume_id)->first();
        return $resume;
    }

    private static function getExperienceById($resume_id)
    {
        $experience_company = [];
        $experience_project = [];
        $experience = Experience::where('resume_id', '=', $resume_id)->get();

        // $collect_exp = collect($experience);

        $experience->each(function ($item) use (&$experience_company, &$experience_project) {
            if ($item->exp_category === 'experience_project')
                $experience_project[] = $item;
            else
                $experience_company[] = $item;
        });
        return
            [
                'experience_project' => $experience_project,
                'experience_company' => $experience_company
            ];
    }

    private static function getResumeSkillById($resume_id)
    {
        $skills = ResumeSkills::select('skill_name')
            ->join('programming_skills', 'programming_skills.skill_id', '=', 'resume_skills.skill_id')
            ->where('resume_id', '=', $resume_id)
            ->get();
        $skill_name = [];
        $skills->each(function ($item) use (&$skill_name) {
            $skill_name[] = $item->skill_name;
        });
        return $skill_name;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    private static function checkResumeBeforeUpdate($resume_id)
    {
        $applications = JobApplication::where('resume_id', '=', $resume_id)->get();

        if (count($applications) != 0) {
            foreach ($applications as $application) {
                $job_expired_date = self::checkJobExpiredDate($application['job_id']);
                if (!($application['status'] === 'declined' || $job_expired_date || ($application['status'] === 'approved' && $application['application_completed'] === 1))) {
                    return false;
                }
                // if(!($application['status'] === 'approved' && $application['application_completed'] === 1)){
                //     return false;
                // }
            }
        }
        return true;
    }

    private static function checkJobExpiredDate($job_id)
    {

        $expired_date = Job::select('job_end_date')
            ->where('job_id', '=', $job_id)
            ->first();

        $current_date = Carbon::now();
        // $current_date = Carbon::parse('Y/m/d', $current_date);

        return $current_date->gt($expired_date['job_end_date']);
    }

    public function handleUpdateResume(Request $request, $id)
    {
        //
        if (!self::checkResumeBeforeUpdate($id)) {
            return response([
                'status' => 200,
                'message' => 'Your resume has been considered in a job',
            ]);
        }
        $education = $request->resume['education'];
        $certificate = $request->resume['certificate'];
        $image = $request->resume['image'];

        $experience_project = $request->resume['experience_project'];
        $experience_company = $request->resume['experience_company'];
        $skills = $request->resume['skills'];

        self::updateResume($education, $certificate, $image, $id);
        self::deleteExperience($id);
        self::deleteResumeSkill($id);

        self::storeExperience($experience_project, $id, "experience_project");
        self::storeExperience($experience_company, $id, "experience_company");
        self::storeResumeSkills($skills, $id);

        return response([
            'status' => 200,
            'message' => 'Update resume successfully',
            // 'user' => auth()->user()
        ]);
    }

    private static function updateResume($education, $certificate, $image, $id)
    {
        $resume = Resume::where('resume_id', '=', $id)->update([
            'education' => $education,
            'certificate' => $certificate,
            'image' => $image,
        ]);
        return $resume;
    }

    private static function deleteExperience($id)
    {
        Experience::where('resume_id', $id)->delete();
    }

    private static function deleteResumeSkill($id)
    {
        ResumeSkills::where('resume_id', $id)->delete();
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
        Experience::where('resume_id', $id)->delete();
        ResumeSkills::where('resume_id', $id)->delete();
        Resume::where('resume_id', $id)->delete();

        return response([
            'message' => 'Delete Resume successfully',
        ]);
    }

    public function publicStatusResume($resume_id)
    {
        Resume::where('resume_id', '=', $resume_id)
            ->update([
                'public_status' => 1
            ]);
        return response([
            'message' => 'Now recruiter can see your CV'
        ]);
    }

    public function privateStatusResume($resume_id)
    {
        Resume::where('resume_id', '=', $resume_id)
            ->update([
                'public_status' => 0
            ]);
        return response([
            'message' => 'Your resume is private'
        ]);
    }
}
