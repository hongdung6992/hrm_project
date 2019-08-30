<?php

use Illuminate\Database\Seeder;

class DepartmentsTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $departments = array(
      ['id' => 1, 'parent_id' => 0, 'name' => 'Root', 'slug' => 'root'],
      ['id' => 2, 'parent_id' => 1, 'name' => 'Phòng hành chính nhân sự', 'slug' => 'phong-hanh-chinh-nhan-su'],
      ['id' => 3, 'parent_id' => 1, 'name' => 'Phòng kế hoạch vật tư', 'slug' => 'phong-ke-hoach-vat-tu'],
      ['id' => 4, 'parent_id' => 1, 'name' => 'Phòng kinh doanh - xuất nhập khẩu', 'slug' => 'phong-kinh-doanh-xuat-nhap-khau'],
      ['id' => 5, 'parent_id' => 1, 'name' => 'Phòng tài chính kế toán', 'slug' => 'phong-tai-chinh-ke-toan'],
      ['id' => 6, 'parent_id' => 1, 'name' => 'Phòng quản lý chất lượng', 'slug' => 'phong-quan-ly-chat-luong'],
      ['id' => 7, 'parent_id' => 1, 'name' => 'Phòng kỹ thuật', 'slug' => 'phong-ky-thuat'],
      ['id' => 8, 'parent_id' => 1, 'name' => 'Phân xưởng liệu', 'slug' => 'phan-xuong-lieu'],
      ['id' => 9, 'parent_id' => 1, 'name' => 'Phân xưởng luyện', 'slug' => 'phan-xuong-luyen'],
      ['id' => 10, 'parent_id' => 1, 'name' => 'Phân xưởng cán', 'slug' => 'phan-xuong-can'],
      
      ['id' => 11, 'parent_id' => 2, 'name' => 'Bộ phận hành chính', 'slug' => 'bo-phan-hanh-chinh'],
      ['id' => 12, 'parent_id' => 2, 'name' => 'Bộ phận nhân sự', 'slug' => 'bo-phan-nhan-su'],
      ['id' => 13, 'parent_id' => 2, 'name' => 'Tổ bảo vệ', 'slug' => 'to-bao-ve'],
      ['id' => 14, 'parent_id' => 2, 'name' => 'Tổ giám sát', 'slug' => 'to-giam-sat'],

      ['id' => 15, 'parent_id' => 4, 'name' => 'Bộ phận bán hàng', 'slug' => 'bo-phan-ban-hang'],
      ['id' => 16, 'parent_id' => 4, 'name' => 'Bộ phận xuất nhập khẩu', 'slug' => 'bo-phan-xuat-nhap-khau'],
      ['id' => 17, 'parent_id' => 4, 'name' => 'Bộ phận marketting', 'slug' => 'bo-phan-marketting'],
      ['id' => 18, 'parent_id' => 4, 'name' => 'Kho thành phẩm', 'slug' => 'kho-thanh-pham'],

      ['id' => 19, 'parent_id' => 8, 'name' => 'Tổ phân liệu', 'slug' => 'to-phan-lieu'],
      ['id' => 20, 'parent_id' => 8, 'name' => 'Tổ xử lý phối liệu', 'slug' => 'to-xu-ly-phoi-lieu'],
      ['id' => 21, 'parent_id' => 8, 'name' => 'Tổ gió đá', 'slug' => 'to-gio-da'],
      ['id' => 22, 'parent_id' => 8, 'name' => 'Tổ cầu trục', 'slug' => 'to-cau-truc'],
      ['id' => 23, 'parent_id' => 8, 'name' => 'Tổ lái xe', 'slug' => 'to-lai-xe'],
      ['id' => 24, 'parent_id' => 8, 'name' => 'Tổ bảo trì', 'slug' => 'to-bao-tri'],
      ['id' => 25, 'parent_id' => 8, 'name' => 'Tổ sửa xe', 'slug' => 'to-sua-xe'],

      ['id' => 26, 'parent_id' => 9, 'name' => 'Bộ phận công nghệ luyện', 'slug' => 'bo-phan-cong-nghe-luyen'],
      ['id' => 27, 'parent_id' => 9, 'name' => 'Bộ phận đúc', 'slug' => 'bo-phan-duc'],
      ['id' => 28, 'parent_id' => 9, 'name' => 'Bộ phận thiết bị cơ', 'slug' => 'bo-phan-thiet-bi-co'],
      ['id' => 29, 'parent_id' => 9, 'name' => 'Bộ phận điện', 'slug' => 'bo-phan-dien'],

      ['id' => 30, 'parent_id' => 10, 'name' => 'Bộ phận công nghệ cán', 'slug' => 'bo-phan-cong-nghe-can'],
      ['id' => 31, 'parent_id' => 10, 'name' => 'Bộ phận thiết bị', 'slug' => 'bo-phan-thiet-bi'],
      ['id' => 32, 'parent_id' => 10, 'name' => 'Bộ phận cơ', 'slug' => 'bo-phan-co'],
    );
    DB::table('departments')->insert($departments);
  }
}
