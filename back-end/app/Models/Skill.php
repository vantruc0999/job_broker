<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $table = 'programming_skills';
    protected $primaryKey = 'skill_id';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
