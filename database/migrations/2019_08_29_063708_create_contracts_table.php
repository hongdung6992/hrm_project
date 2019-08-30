<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContractsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('contracts', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedInteger('contract_type_id');
      $table->unsignedBigInteger('personnel_id');
      $table->string('code')->unique()->nullable()->comment('mã hợp đồng');
      $table->float('basic_salary')->nullable()->comment('lương cơ bản');
      $table->float('subsidies_salary')->nullable()->comment('lương phụ cấp');
      $table->float('effective_salary')->nullable()->comment('lương hiệu quả');
      $table->date('effective_date')->comment('ngày hiệu lực');
      $table->date('expiry_date')->nullable()->comment('ngày hết hiệu lực');
      $table->date('sign_date')->nullable()->comment('ngày ký');
      $table->boolean('status')->default(false)->comment('0:chưa ký, 1:đã ký');
      $table->foreign('contract_type_id')->references('id')->on('contract_types')->onUpdate('cascade')->onDelete('cascade');
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
    Schema::dropIfExists('contracts');
  }
}
