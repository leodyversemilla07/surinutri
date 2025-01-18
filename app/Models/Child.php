<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Child extends Model
{
    protected $table = 'children';

    protected $fillable = [
        'name',
        'birth_date',
        'gender',
        'parent_id'
    ];

    public function parent()
    {
        return $this->belongsTo(Parent::class);
    }

    public function measurements()
    {
        return $this->hasMany(Measurement::class);
    }
}
