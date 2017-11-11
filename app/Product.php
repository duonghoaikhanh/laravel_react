<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    /* Add the fillable property into the Product Model */
    protected $fillable = ['title', 'description', 'price', 'availability'];
}
