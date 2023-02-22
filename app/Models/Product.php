<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'image' => 'json',
    ];

    public function scopeConditions($query, $type)
    {
        $query->where('conditions', $type);
    }
    public function scopeSold($query)
    {
        $query->where('sale', 1);
    }
}
