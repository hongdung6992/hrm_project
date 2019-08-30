<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonnelsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('personnels', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedInteger('literacy_id')->comment('trình độ');
      $table->unsignedInteger('department_id')->comment('thuộc phòng ban');
      $table->unsignedInteger('position_id')->comment('chức vụ');
      $table->string('record_id')->nullable()->comment('hồ sơ gồm có');
      $table->string('code')->unique()->comment('mã nhân viên');
      $table->string('name')->comment('họ và tên');
      $table->date('birthday')->comment('ngày sinh');
      $table->boolean('gender')->default(true)->comment('1:nam. 2:nữ')->nullable();
      $table->string('card_id')->unique()->comment('số CMND');
      $table->date('card_date')->nullable()->comment('ngày cấp');
      $table->string('card_where')->nullable()->comment('nới cấp');
      $table->string('email')->unique()->nullable();
      $table->string('phone')->nullable();
      $table->string('permanent_address')->nullable()->comment('tạm trú');
      $table->string('temporary_address')->nullable()->comment('thường trú');
      $table->string('graduate_school')->nullable()->comment('trường tốt nghiệp');
      $table->year('graduate_year')->comment('năm tốt nghiệp');
      $table->string('certificate')->nullable();
      $table->string('speciality')->nullable();
      $table->date('start_work')->nullable()->comment('ngày bắt đầu làm việc');
      $table->date('end_work')->nullable()->comment('ngày thôi việc');
      $table->tinyInteger('status')->default(2)->nullable()->comment('0:thôi việc, 1:chính thức, 2: thử việc');

      $table->foreign('literacy_id')->references('id')->on('literacies')->onUpdate('cascade')->onDelete('cascade');
      $table->foreign('department_id')->references('id')->on('departments')->onUpdate('cascade')->onDelete('cascade');
      $table->foreign('position_id')->references('id')->on('positions')->onUpdate('cascade')->onDelete('cascade');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('personnels');
  }
}
