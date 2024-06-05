import { 
    criatura,
    Heroe, 
    Monstruo,
    Orco,
    Goblin, 
    Kobold 
} from "./criatura.js";

import {
    juego,
    Item
} from "./juego.js"

//criatura1 = new criatura("elfo", 100, 150, 10)

//console.log(new Orco())

const heroe1 = new Heroe("Santiago", 500, 500, 25)

const juegoMain = new juego(heroe1)

juegoMain.ejecutar("investigar")
juegoMain.ejecutar("atacar")

//console.log(heroe1)

const pocion = new Item("Poción de vida", 20);
heroe1.inventario.agregarItem(pocion);