<?php

use Illuminate\Database\Seeder;

class PositionsTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $positions = array(
      ['name' => 'Tổng giám đốc', 'slug' => 'tong-giam-doc'],
      ['name' => 'Phó tổng giám đốc', 'slug' => 'pho-tong-giam-doc'],
      ['name' => 'Giám đốc', 'slug' => 'giam-doc'],
      ['name' => 'Phó giám đốc', 'slug' => 'pho-giam-doc'],
      ['name' => 'Trưởng phòng', 'slug' => 'truong-phong'],
      ['name' => 'Phó phòng', 'slug' => 'pho-phong'],
      ['name' => 'Quản đốc', 'slug' => 'quan-doc'],
      ['name' => 'Phó quản đốc', 'slug' => 'pho-quan-doc'],
      ['name' => 'Trưởng ca', 'slug' => 'truong-ca'],
      ['name' => 'Tổ trưởng', 'slug' => 'to-truong'],
      ['name' => 'Nhân viên', 'slug' => 'nhan-vien'],
      ['name' => 'Công nhân', 'slug' => 'cong-nhan']
    );
    DB::table('positions')->insert($positions);
  }
}
