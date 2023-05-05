<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeSkills extends Model
{
    protected $table = 'resume_skills';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];

}
