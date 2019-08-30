<?php

use Illuminate\Database\Seeder;

class ContractsTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $contract_types = array(
      ['name' => 'Thử việc', 'slug' => 'thu-viec'],
      ['name' => 'Xác định thời hạn', 'slug' => 'xac-dinh-thoi-han'],
      ['name' => 'Không xác định thời hạn', 'slug' => 'khong-xac-dinh-thoi-han']
    );
    DB::table('contract_types')->insert($contract_types);
  }
}
