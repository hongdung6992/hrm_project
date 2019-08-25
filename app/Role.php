<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
  protected $table = 'roles';
  protected $fillable = [
    'name', 'slug'
  ];

  public function users()
  {
    return $this->belongsToMany(User::class, 'role_user');
  }

  public function permissions()
  {
    return $this->belongsToMany(Permission::class, 'permission_role');
  }

  public function hasPermission($permission)
  {
    return optional($this->permissions->pluck('slug'))->contains($permission->slug);
  }
}
