<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',50)->comment('名前');
            $table->string('email',255)->unique()->comment('メアド');
            $table->string('img',255)->comment('性別');
            $table->integer('age',3)->comment('年齢');
            $table->string('gender',5)->comment('性別');
            $table->string('target_gender',5)->comment('対象性別');
            $table->string('repezen',5)->comment('出身地');
            $table->string('current_address')->comment('現住所');
            $table->string('job')->nullable()->comment('職種');
            $table->string('birthday')->comment('誕生日');
            $table->text('self_introduction',500)->comment('自己紹介');
            $table->boolean('admin_flag')->comment('権限フラグ')->default(false);
            $table->text('deleted_flag')->comment('退会フラグ')->default(false);
            $table->string('password');
            $table->rememberToken();
            $table->timestamp('email_verified_at')->nullable();
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
        Schema::dropIfExists('users');
    }
};
