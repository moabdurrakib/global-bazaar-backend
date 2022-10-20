<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
    \App\Models\User::factory(10)->create();
    \App\Models\Brand::factory(20)->create();
    \App\Models\Category::factory(30)->create();
    \App\Models\SubCategory::factory(100)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'phone' => '01557768838',
            'password'=> Hash::make('password')
        ]);

        $this->call([
            AdminsTableSeeder::class,
            SellerTableSeeder::class,
        ]);
    }
}
