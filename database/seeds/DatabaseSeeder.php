<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    $this->call(UsersRolesPermissionTableSeeder::class);
    $this->call(ContractsTableSeeder::class);
    $this->call(DecisionsTableSeeder::class);
    $this->call(RecordsTableSeeder::class);
    $this->call(PositionsTableSeeder::class);
    $this->call(DepartmentsTableSeeder::class);
  }
}
