<?php

use Illuminate\Database\Seeder;

class DecisionsTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $decision_types = array(
      ['name' => 'Điều chỉnh lương', 'slug' => 'dieu-chinh-luong'],
      ['name' => 'Điều chuyển công tác', 'slug' => 'dieu-chuyen-cong-tac'],
      ['name' => 'Chấm dứt hợp đồng lao động', 'slug' => 'cham-dut-hop-dong-lao-dong'],
      ['name' => 'Xử phạt', 'slug' => 'xu-phat'],
      ['name' => 'Khen thưởng', 'slug' => 'khen-thuong'],
    );
    DB::table('decision_types')->insert($decision_types);
  }
}
