<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{
    public function login(Request $request) {
        $data = $request->only(['email', 'password']);
        
        if (auth()->attempt($data)) {
            $me = auth()->user();
            $me->tokens()->delete();
            $token = $me->createToken('spa')->plainTextToken;
            return response()->json(['message' => 'Successfully logged in', 'data' => [
                'token' => $token,
            ]]);
        }

        return response(['message' => 'Wrong credentials'], 402);
    }

    public function register(Request $request) {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'name' => 'required',
        ]);

        $data = $request->only(['email', 'password', 'name']);        
        $user = User::create($data);        

        if ($user) {         
            $token = $user->createToken('spa')->plainTextToken;

            return response()->json(['message' => 'Successfully logged in', 'data' => [
                'token' => $token,
            ]]);
        }

        return response(['message' => 'Wrong'], 400);
    }
}
