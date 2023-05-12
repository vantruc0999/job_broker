<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
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
        $first_name = $request->resume['first_name'];
        $last_name = $request->resume['last_name'];
        $phone = $request->resume['phone'];
        $birth_day = $request->resume['birth_day'];
        $email = $request->resume['email'];
        $address = $request->resume['address'];
        $hobby = $request->resume['hobby'];
        $activity = $request->resume['activity'];
        $resume_name = $request->resume['resume_name'];
        $education = $request->resume['education'];
        $education_year = $request->resume['education_year'];
        $education_major = $request->resume['education_major'];
        $education_description = $request->resume['education_description'];
        $certificate = $request->resume['certificate'];
        $image = $request->resume['image'];
        $template = $request->resume['template'];
        $experience_project = $request->resume['experience_project'];
        $experience_company = $request->resume['experience_company'];
        $skills = $request->resume['skills'];

        $id_resume = self::storeResume($first_name, $last_name, $phone, $birth_day, $email, $address, $hobby, $activity, $resume_name, $education, $education_year, $education_major, $education_description, $certificate, $image, $template);
        self::storeExperience($experience_project, $id_resume, "experience_project");
        self::storeExperience($experience_company, $id_resume, "experience_company");
        self::storeResumeSkills($skills, $id_resume);
        return response([
            'status' => 200,
            'message' => 'Create resume successfully',
            'resume_id' => $id_resume
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

    private static function storeResume($first_name, $last_name, $phone, $birth_day, $email, $address, $hobby, $activity, $resume_name, $education, $education_year, $education_major, $education_description, $certificate, $image, $template)
    {
        $resume = Resume::create([
            'first_name' => $first_name,
            'last_name' => $last_name,
            'phone' => $phone,
            'birth_day' => $birth_day,
            'email' => $email,
            'address' => $address,
            'hobby' => $hobby,
            'activity' => $activity,
            'resume_name' => $resume_name,
            'education' => $education,
            'education_year' => $education_year,
            'education_major' => $education_major,
            'education_description' => $education_description,
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
        $skills = ResumeSkills::select('skill_name', 'resume_skills.skill_id')
            ->join('programming_skills', 'programming_skills.skill_id', '=', 'resume_skills.skill_id')
            ->where('resume_id', '=', $resume_id)
            ->get();
        // $skill_name = [];
        // $skills->each(function ($item) use (&$skill_name) {
        //     $skill_name[] = $item->skill_name;
        // });
        return $skills;
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
        $first_name = $request->resume['first_name'];
        $last_name = $request->resume['last_name'];
        $phone = $request->resume['phone'];
        $birth_day = $request->resume['birth_day'];
        $email = $request->resume['email'];
        $address = $request->resume['address'];
        $hobby = $request->resume['hobby'];
        $activity = $request->resume['activity'];
        $resume_name = $request->resume['resume_name'];
        $education = $request->resume['education'];
        $education_year = $request->resume['education_year'];
        $education_major = $request->resume['education_major'];
        $education_description = $request->resume['education_description'];
        $certificate = $request->resume['certificate'];
        $image = $request->resume['image'];

        $experience_project = $request->resume['experience_project'];
        $experience_company = $request->resume['experience_company'];
        $skills = $request->resume['skills'];

        self::updateResume(
            $first_name,
            $last_name,
            $phone,
            $birth_day,
            $email,
            $address,
            $hobby,
            $activity,
            $resume_name,
            $education,
            $education_year,
            $education_major,
            $education_description,
            $certificate,
            $image,
            $id
        );
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

    private static function updateResume(
        $first_name,
        $last_name,
        $phone,
        $birth_day,
        $email,
        $address,
        $hobby,
        $activity,
        $resume_name,
        $education,
        $education_year,
        $education_major,
        $education_description,
        $certificate,
        $image,
        $id
    ) {
        $resume = Resume::where('resume_id', '=', $id)->update([
            'first_name' => $first_name,
            'last_name' => $last_name,
            'phone' => $phone,
            'birth_day' => $birth_day,
            'email' => $email,
            'address' => $address,
            'hobby' => $hobby,
            'activity' => $activity,
            'resume_name' => $resume_name,
            'education' => $education,
            'education_year' => $education_year,
            'education_major' => $education_major,
            'education_description' => $education_description,
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

    private static function getMainCvId()
    {
        return Candidate::where('candidate_id', '=', auth()->user()['candidate_id'])->first()['main_cv_id'];
    }

    public function publicStatusResume($resume_id)
    {
        $cv_id = self::getMainCvId();

        if ($cv_id != null)
            self::privateStatusResume($cv_id, 1);

        // return self::getMainCvId();
        Resume::where('resume_id', '=', $resume_id)
            ->update([
                'public_status' => 1
            ]);
        Candidate::where('candidate_id', '=', auth()->user()['candidate_id'])
            ->update([
                'main_cv_id' => $resume_id
            ]);
        return response([
            'message' => 'Now recruiter can see your CV'
        ]);
    }

    public static function privateStatusResume($resume_id, $updatePublic = 0)
    {
        Resume::where('resume_id', '=', $resume_id)
            ->update([
                'public_status' => 0
            ]);
        Candidate::where('candidate_id', '=', auth()->user()['candidate_id'])
            ->update([
                'main_cv_id' => NULL
            ]);
        if ($updatePublic != 0)
            return 1;
        return response([
            'message' => 'Your resume is private'
        ]);
    }
}
