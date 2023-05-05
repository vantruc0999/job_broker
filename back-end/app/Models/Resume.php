<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $table = 'resume';
    protected $primaryKey = 'resume_id';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
