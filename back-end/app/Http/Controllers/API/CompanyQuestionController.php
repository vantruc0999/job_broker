<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\CompanyQuestion;
use Illuminate\Http\Request;

class CompanyQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $questions = CompanyQuestion::where('recruiter_id', '=', auth()->user()['recruiter_id'])->get();
        return $questions;
    }

    public function getQuestionByCategoryId($category_id){
        $questions = CompanyQuestion::where('recruiter_id', '=', auth()->user()['recruiter_id'])
                    ->where('category_id', '=', $category_id)
                    ->get();
        return $questions;
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
        CompanyQuestion::create([
            "question_title" => $request->question_title,
            "A" => $request->A,
            "B" => $request->B,
            "C" => $request->C,
            "D" => $request->D,
            "correct_answer" => $request->correct_answer,
            "category_id" => $request->category_id,
            "recruiter_id" => auth()->user()['recruiter_id']
        ]);

        return response([
            "message" => "Create question successfully"
        ]);
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
        return CompanyQuestion::where('question_id', '=', $id)->first();
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
        CompanyQuestion::where('question_id', '=', $id)
            ->update([
                "question_title" => $request->question_title,
                "A" => $request->A,
                "B" => $request->B,
                "C" => $request->C,
                "D" => $request->D,
                "correct_answer" => $request->correct_answer,
                "category_id" => $request->category_id,
                "recruiter_id" => auth()->user()['recruiter_id']
            ]);

        return response([
            "message" => "Update question successfully"
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
        CompanyQuestion::where('question_id', '=', $id)->delete();
        return response([
            "message" => "Delete question successfully"
        ]);
    }
}
