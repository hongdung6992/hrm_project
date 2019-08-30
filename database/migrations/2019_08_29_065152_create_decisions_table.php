<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDecisionsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('decisions', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedInteger('decision_type_id');
      $table->unsignedBigInteger('personnel_id');
      $table->string('code')->unique()->nullable()->comment('mã quyết định');
      $table->string('reason')->nullable()->comment('lý do tạo quyết định');
      $table->float('old_basic_salary')->nullable()->comment('lương cơ bản cũ');
      $table->float('old_subsidies_salary')->nullable()->comment('lương phụ cấp cũ');
      $table->float('old_effective_salary')->nullable()->comment('lương hiệu quả cũ');
      $table->float('new_basic_salary')->nullable()->comment('lương cơ bản mới');
      $table->float('new_subsidies_salary')->nullable()->comment('lương phụ cấp mới');
      $table->float('new_effective_salary')->nullable()->comment('lương hiệu quả mới');
      $table->date('effective_date')->comment('ngày hiệu lực');
      $table->date('sign_date')->nullable()->comment('ngày ký quyết định');
      $table->foreign('decision_type_id')->references('id')->on('decision_types')->onUpdate('cascade')->onDelete('cascade');
      $table->foreign('personnel_id')->references('id')->on('personnels')->onUpdate('cascade')->onDelete('cascade');
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
    Schema::dropIfExists('decisions');
  }
}
