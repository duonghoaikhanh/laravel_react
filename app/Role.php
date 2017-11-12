<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';

    /* Add the fillable property into the Product Model */
    protected $fillable = ['name'];
}
