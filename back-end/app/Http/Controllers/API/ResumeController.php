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
        $experience = $request->resume['experience'];
        $skills = $request->resume['skills'];
        $id_resume = self::storeResume($education, $certificate, $image);
        self::storeExperience($experience, $id_resume);
        self::storeResumeSkills($skills, $id_resume);
        return response([    
            'status' => 200, 
            'message' => 'Create resume successfully',
            // 'user' => auth()->user()
        ]);
    }

    private static function storeExperience($experience, $resume_id){
        if(count($experience) != 0){
            foreach($experience as $item){
                Experience::create([
                    'mission' => $item['mission'],
                    'project_name' => $item['project_name'],
                    'achievement' => $item['achievement'],
                    'experience_start' => $item['experience_start'],
                    'experience_end' => $item['experience_end'],
                    'resume_id' => $resume_id
                ]);
            }
        }
    }

    private static function storeResumeSkills($skill, $resume_id){
        if(count($skill) != 0){
            foreach($skill as $item){
                ResumeSkills::create([
                    'resume_id' => $resume_id,
                    'skill_id' => $item
                ]);
            }
        }
    }

    private static function storeResume($education, $certificate, $image){
        $resume = Resume::create([
            'education' => $education,
            'certificate' => $certificate,
            'image' => $image,
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
