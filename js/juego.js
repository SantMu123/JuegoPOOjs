import {Orco, Goblin, Kobold} from "./criatura.js";

export class juego {
    constructor(heroe){
        this.historial = [];
        this.monstruo = null;
        this.heroe = heroe;
        //5
        this.combate = new combate(heroe, this)
    }
    loguear (mensaje) {
        this.historial.push(mensaje)
        console.log(mensaje)
    }
    investigar (){
        if (this.monstruo && this.monstruo.vida > 0){
            this.loguear("El monstruo todavia está vivo!!")
            return;
        }
        const prob = Math.random();
        if(prob < 0.5){
            const monstruos = [new Orco(), new Goblin(), new Kobold()];
            rand = Math.random()
            this.monstruo = monstruos[rand * monstruos.length]
            this.loguear(`¡Un ${this.monstruo.nombre} aparece!`)
        } 
    }
    atacar (){
        if(!this.monstruo || this.monstruo.vida <= 0){
            this.loguear("No hay Monstruos para atacar!!")
            return;
        }
        this.combate.atacar();
    }
    // seis
    ejecutar(accion) {
        if (this.heroe.vida <= 0) {
            this.loguear("El héroe está muerto. No puedes realizar más acciones.");
            return;
        }
        switch (accion) {
            case "investigar":
                this.investigar();
                break;
            case "atacar":
                this.atacar();
                break;
            case "utilizarItem":
                // Este caso requiere un parámetro adicional
                break;
            default:
                this.loguear("Acción no válida.");
                break;
        }
    }
    utilizarItem(itemNombre) {
        const item = this.heroe.inventario.obtenerItem(itemNombre);
        if (item) {
            this.heroe.utilizarItem(item);
            this.loguear(`El héroe utilizó ${itemNombre}.`);
        } else {
            this.loguear(`El héroe no tiene un item llamado ${itemNombre}.`);
        }
    }
    //8
    reiniciar() {
        this.historial = [];
        this.monstruo = null;
        this.heroe.vida = this.heroe.vidaMaxima;
        this.heroe.inventario = new Inventario();
        this.loguear("El juego se ha reiniciado.");
    }
}

class combate {
    constructor(heroe, juego){
        this.heroe = heroe;
        this.juego = juego;
    }
    atacar(){
        if (this.juego.monstruo && this.juego.monstruo.vida > 0){
            const dano = this.heroe.ataque;
            this.juego.monstruo.vida -= dano;
            this.juego.loguear(`Atacas a ${this.juego.monstruo.nombre}! y le haces ${dano} de daño.`)
            if(this.juego.monstruo.vida <= 0){
                this.juego.loguear(`Se ha derrotado a ${this.juego.monstruo.nombre} Felicitate`)
            }
            else{
                this.juego.monstruo.atacar(this.heroe);
                this.juego.loguear(`${this.juego.monstruo.nombre} te ataca! y hace ${this.juego.monstruo.ataque} de daño`)
                //siete (7)
                if(this.heroe.vida <= 0){
                    this.juego.loguear("El heroe ha sido derrotado")
                }
            }
        }
    }
}
 //10
class Item {
    constructor(nombre, vida) {
        this.nombre = nombre;
        this.vida = vida;
    }

    utilizar(objetivo) {
        objetivo.vida += this.vida;
        if (objetivo.vida > objetivo.vidaMaxima) {
            objetivo.vida = objetivo.vidaMaxima;
        }
    }
}

//14
export class Inventario {
    constructor() {
        this.items = [];
    }

    agregarItem(item) {
        this.items.push(item);
    }

    obtenerItem(nombre) {
        return this.items.find(item => item.nombre === nombre);
    }

    eliminarItem(nombre) {
        this.items = this.items.filter(item => item.nombre !== nombre);
    }

    listarItems() {
        return this.items.map(item => item.nombre).join(", ");
    }
}