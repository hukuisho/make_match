<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable(false);
            $table->string('email')->nullable(false);
            $table->string('img')->nullable(false);
            $table->integer('age')->nullable(false);
            $table->string('gender')->nullable(false);
            $table->string('target_gender')->nullable(false);
            $table->string('repezeni')->nullable(false);
            $table->string('current_address')->nullable(false);
            $table->string('job')->nullable();
            $table->string('birthday')->nullable(false);
            $table->text('self_introduction')->nullable();
            $table->boolean('admin_flag')->nullable(false);
            $table->boolean('deleted_flag')->nullable(false);
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
}