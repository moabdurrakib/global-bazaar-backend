<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        Admin::create([
            'name' => 'Test Admin',
            'email' => 'admin@example.com',
            'phone' => '01557768837',
            'password'=> Hash::make('password')
        ]);
    }
}
