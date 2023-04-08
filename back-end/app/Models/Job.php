<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table = 'job';
    protected $primaryKey = 'job_id';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
    // protected $fillable = [
    //     'job_id',
    //     'job_name',
    //     'position_name',
    //     'job_start_date',
    //     'job_end_date',
    //     'salary',
    //     'job_location',
    //     'certificate',
    //     'language',
    //     'job_requirement',
    //     'job_description',
    //     'benefit',
    //     'process_step',
    //     'recruiter_id',
    //     'payment_status'
    // ];
}
