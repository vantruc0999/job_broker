<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Candidate extends Model
{
    protected $table = 'candidate';
    protected $primaryKey = 'candidate_id';
    public $timestamps = false;
    use HasApiTokens, HasFactory;

    protected $guarded = [];

}
