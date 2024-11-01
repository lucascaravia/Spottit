<?php

namespace App\Http\Controllers;

use App\Models\Espacio;
use Illuminate\Http\Request;

class EspacioController extends Controller
{
    public function index()
    {
        return Espacio::all();
    }

    public function actualizarEstado(Request $request, $id)
    {
        $espacio = Espacio::find($id);
        $espacio->estado = $request->input('estado');
        $espacio->save();
        return response()->json($espacio);
    }
}
