<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $table = 'experience';
    protected $primaryKey = 'experience_id';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
