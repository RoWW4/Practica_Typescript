abstract class Vehiculo{
    marca:string;
    modelo:string;
    encender():void{
        console.log("Encendido");
    }
    apagar():void{
        console.log("Apagado");
    }
    abstract acelerar():void;//los metodos abstractos tendran que
    abstract frenar():void;//ser definidos en las subclases
}

class CocheVeloz extends Vehiculo{
    constructor(a: string, b: string)
    {
        super();//Para no repetir codigo las subclases pueden
                //invocar al constructor padre con super();
        this.marca = a;
        this.modelo = b;
    }

    acelerar():void{
        console.log("Acelerar rapido");
    }
    frenar():void{
        console.log("Frenar rapido");
    }
}

let coche1: CocheVeloz=new CocheVeloz('Tesla', 'Model 3');
coche1.encender();
coche1.apagar();
coche1.acelerar();
coche1.frenar();