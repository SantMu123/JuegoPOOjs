export class juego {
    constructor(monstruoActual){
        this.historial = [];
        this.monstruo = monstruoActual
    }
    loguear (mensaje) {
        this.historial.push(mensaje)
        console.log(mensaje)
    }
    investigar (nombre, vida, vidaMaxima, ataque){

    }
    atacar (puntos){

    }
}