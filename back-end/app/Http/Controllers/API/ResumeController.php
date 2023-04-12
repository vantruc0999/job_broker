<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use App\Models\Resume;
use App\Models\ResumeSkills;
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
        $resume = Resume::select('resume_id')->where('candidate_id', $candidate_id)->get();
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
        $education = $request->resume['education'];
        $certificate = $request->resume['certificate'];
        $image = $request->resume['image'];
        $template = $request->resume['template'];
        $experience_project = $request->resume['experience_project'];
        $experience_company = $request->resume['experience_company'];
        $skills = $request->resume['skills'];

        $id_resume = self::storeResume($education, $certificate, $image, $template);
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

    private static function storeResume($education, $certificate, $image, $template)
    {
        $resume = Resume::create([
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
        $skills->each(function($item) use (&$skill_name){
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
