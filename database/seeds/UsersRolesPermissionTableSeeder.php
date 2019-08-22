<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;
use App\Permission;

class UsersRolesPermissionTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $config = config('user_role_permission.roles_structure');
    $mapPermission = collect(config('user_role_permission.permission_map'));

    foreach ($config as $key => $modules) {
      //create roles user
      $roles = Role::create([
        'name' => ucwords($key),
        'slug' => $key
      ]);

      //create users
      $users = User::create([
        'name' => ucwords($key),
        'email' => $key . '@gmail.com',
        'phone' => '0123456789',
        'password' => bcrypt('123123')
      ]);
      // assign roles for users
      $users->roles()->attach($roles);

      // create permissions
      $permissions = [];
      foreach ($modules as $module => $value) {
        $crud = explode(',', $value);
        foreach ($crud as $char) {
          $permissionValue = $mapPermission->get($char);

          $permissions[] = Permission::firstOrCreate([
            'name' => t("permission.$permissionValue") . ' ' . t("permission.$module"),
            'slug' => $permissionValue . '-' . $module,
          ])->id;
        }
      }
      $roles->permissions()->attach($permissions);
    }
  }
}
