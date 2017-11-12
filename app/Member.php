<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $table = 'members';

    /* Add the fillable property into the Product Model */
    protected $fillable = ['fullname', 'email', 'birthday', 'gender', 'role'];
}
