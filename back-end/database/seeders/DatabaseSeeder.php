<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Admin::insert([
            'email' => "vantrucadminvip99@gmail.com",
            'first_name' => "Truc",
            'last_name' => "Lionel",
            'password' => Hash::make("@Dangvantruc123")
        ]);
    }
}
