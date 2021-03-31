//Importamos las 3 clases que va a usar Persona
import{ Direccion } from "./Direccion";
import{ Mail } from "./Mail";
import { Telefono } from "./Telefono";

//Exportamos Persona para que pueda ser usada en el main
export class Persona{
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanios: Date;
    private _color: string;
    private _sexo: string;
    private _direcciones: Direccion[];
    private _mails: Mail[];
    private _telefonos: Telefono[];
    private _notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanios: Date, color: string,
        sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: string) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanios = cumpleanios;
        this._color = color;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(value: string) {
        this._apellidos = value;
    }
    
    public get edad(): number {
        return this._edad;
    }
    public set edad(value: number) {
        this._edad = value;
    }
    
    public get dni(): string {
        return this._dni;
    }
    public set dni(value: string) {
        this._dni = value;
    }
    
    public get cumpleanios(): Date {
        return this._cumpleanios;
    }
    public set cumpleanios(value: Date) {
        this._cumpleanios = value;
    }
   
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    
    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }
    
    public get direcciones(): Direccion[] {
        return this._direcciones;
    }
    public set direcciones(value: Direccion[]) {
        this._direcciones = value;
    }
    
    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(value: Mail[]) {
        this._mails = value;
    }
    
    public get telefonos(): Telefono[] {
        return this._telefonos;
    }
    public set telefonos(value: Telefono[]) {
        this._telefonos = value;
    }

    public get notas(): string {
        return this._notas;
    }
    public set notas(value: string) {
        this._notas = value;
    } 
}