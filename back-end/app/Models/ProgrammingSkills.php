<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgrammingSkills extends Model
{
    protected $table = 'programming_skills';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
