<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $packages = Package::all();
        return $packages;
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
        Package::create([
            "package_name" => $request->package_name,
            "package_description" => $request->package_description,
            "price" => $request->price,
            "exp_time" => $request->exp_time,
            "unit" => $request->unit,
        ]);
        return response([
            "message" => "Create package successfully"
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
        $package = Package::where('package_id', '=', $id)->first();
        return response([
            "package_infor" => $package
        ]);
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
        Package::where('package_id', '=', $id)
            ->update([
                "package_name" => $request->package_name,
                "package_description" => $request->package_description,
                "price" => $request->price,
                "exp_time" => $request->exp_time,
                "unit" => $request->unit
            ]);
        return response([
            "message" => "Update package successfully"
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
}
