<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryExam extends Model
{
    protected $table = 'question_category';
    protected $primaryKey = 'category_id';
    public $timestamps = false;
    use HasFactory;

    protected $guarded = [];
}
