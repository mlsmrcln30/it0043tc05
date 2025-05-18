<?php

namespace App\Controllers;

class Welcome extends BaseController
{
    public function index()
    {
        return view('welcome_form');
    }

    public function greet()
    {
        $name = $this->request->getPost('name');
        return view('welcome_message', ['name' => $name]);
    }
}