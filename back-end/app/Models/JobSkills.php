<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobSkills extends Model
{
    protected $table = 'job_skills';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
