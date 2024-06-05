export class criatura {
    constructor(nombre, vida, vidaMaxima, ataque){
        if(new.target === criatura){
            throw new Error("No se puede instanciar una clase abstracta")
            //new.taget es una referencia al constructor que se está invocando
            //new.taget es una propiedad que se refiere al constructor que fue llamado con la palabra clave new
        }
        this.nombre = nombre;
        this.vida = vida;
        this.vidaMaxima = vidaMaxima;
        this.ataque = ataque;
    }
}



class Heroe extends criatura {
    constructor(nombre, vida, vidaMaxima, ataque){
        super(nombre, vida, vidaMaxima, ataque)
    }
}
class Monstruo extends criatura {
    constructor(nombre, vida, vidaMaxima, ataque){
        if(new.target === criatura){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        super(nombre, vida, vidaMaxima, ataque)
    }
}



export class Orco extends Monstruo {
    constructor() {
        super("Orco", 30, 30, 10);
    }
}

export class Goblin extends Monstruo {
    constructor() {
        super("Goblin", 20, 20, 5);
    }
}

export class Kobold extends Monstruo {
    constructor() {
        super("Kobold", 10, 10, 3);
    }
}