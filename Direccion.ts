//Hacemos la clase Direccion exportable
export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: string;
    private _letra: string;
    private _cod_postal: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(calle: string, numero: number, piso: string, letra: string, cod_postal: number,
        poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cod_postal = cod_postal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    
    public get calle(): string {
        return this._calle;
    }
    public set calle(value: string) {
        this._calle = value;
    }
    
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    
    public get piso(): string {
        return this._piso;
    }
    public set piso(value: string) {
        this._piso = value;
    }
    
    public get letra(): string {
        return this._letra;
    }
    public set letra(value: string) {
        this._letra = value;
    }
    
    public get cod_postal(): number {
        return this._cod_postal;
    }
    public set cod_postal(value: number) {
        this._cod_postal = value;
    }
    
    public get poblacion(): string {
        return this._poblacion;
    }
    public set poblacion(value: string) {
        this._poblacion = value;
    }
    
    public get provincia(): string {
        return this._provincia;
    }
    public set provincia(value: string) {
        this._provincia = value;
    }

}



