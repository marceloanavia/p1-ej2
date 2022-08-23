"use strict";

/* TODO */
var categoriaValor = 0;
var subcategoriaValor = 0;

var categoria = prompt("Ingresar categoría (1, 2, 3)");

switch (categoria){
    case "1":
        categoriaValor = 1000;
        break;
    case "2":
        categoriaValor = 1500;
        break;
    case "3":
        categoriaValor = 2000;
        break;
    default:
    break;
}

var subcategoria = prompt("Ingresar subcategoría (A, B, C)").toLowerCase();
var rango;

switch (subcategoria){
    case "a":
        subcategoriaValor = categoriaValor * 1.5;
        break;
    case "b":
        subcategoriaValor = categoriaValor * 2;
        break;
    case "c":
        subcategoriaValor = categoriaValor * 2.5;
        break;
    default:
    break;
}

if (subcategoriaValor > 4000){
    rango = "avanzado";
} else if(subcategoriaValor <= 4000 && subcategoriaValor > 3000){
    rango = "intermedio";
} else if(subcategoriaValor <= 3000){
    rango = "inicial";
}

alert(`El sueldo es de ${subcategoriaValor}u$s y su rango es ${rango}`);