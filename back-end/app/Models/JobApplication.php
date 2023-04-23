<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    protected $table = 'job_application';
    protected $primaryKey = 'application_id';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
