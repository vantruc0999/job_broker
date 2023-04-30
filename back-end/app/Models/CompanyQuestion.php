<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyQuestion extends Model
{
    protected $table = 'company_question';
    protected $primaryKey = 'question_id';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
