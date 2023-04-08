<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recruiter extends Model
{
    
    use HasFactory;
    protected $table = 'recruiter';
    protected $primaryKey = 'recruiter_id';
    public $timestamps = false;
    
    protected $fillable = [
        'recruiter_id',
        'recruiter_name',
        'company_name',
        'email',
        'password',
        'phone',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

}
