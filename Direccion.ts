export class Direccion {
    private calle: string;
    private numero: number;
    private piso: string;
    private letra: string;
    private cod_postal: number;
    private poblacion: string;
    private provincia: string;

    constructor(calle: string, numero: number, piso: string, letra: string, cod_postal: number,
        poblacion: string, provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.cod_postal = cod_postal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
}


