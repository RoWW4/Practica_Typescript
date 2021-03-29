import{ Direccion } from "./Direccion";
import{ Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona{
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanios: Date;
    private color: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefonos: Telefono[];
    private notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanios: Date, color: string,
        sexo: string, direcciones: string[], mails: string[], telefonos: number[], notas: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanios = cumpleanios;
        this.color = color;
        this.sexo = sexo;
        this.direcciones = new Array<Direccion>();
        this.mails = new Array<Mail>();
        this.telefonos = new Array<Telefono>();
        this.notas = notas;
/*
    SetNombre(nombre: string) {
        this.nombre = nombre;
    }
    GetNombre(nombre:string){
        return this.nombre;
    }
    SetApellidos(apellidos: string){
        this.apellidos=apellidos;
    }
    GetApellidos(apellidos:string){
        return this.apellidos;
    }
    SetEdad(edad:number){
        this.edad=edad;
    }
    GetEdad(edad:number){
        return this.edad;
    }
    SetDni(dni:string){
        this.dni=dni;
    }
    GetDni(dni:string){
        return this.dni;
    }
    SetCumpleanios(cumpleanios:Date){
        this.cumpleanios=cumpleanios;
    }
    GetCumpleanios(cumpleanios:Date){
        return this.cumpleanios;
    }
    SetColor(color:string){
        this.color=color;
    }
    GetColor(color:string){
        return this.color;
    }
    SetSexo(sexo:string){
        this.sexo=sexo;
    }
    GetSexo(sexo:string){
        return this.sexo;
    }
    SetDirecciones(direcciones:string[]){
        this.direcciones=direcciones;
    }
    GetDirecciones(direcciones:string[]){
        return this.direcciones;
    }
    SetMails(mails:string[]){
        this.mails=mails;
    }
    GetMails(mails:string[]){
        return this.mails;
    }
    SetTelefonos(telefonos:number[]){
        this.telefonos=telefonos;
    }
    GetTelefonos(telefonos:number[]){
        return this.telefonos;
    }
    SetNotas(notas:string){
        this.notas=notas;
    }
    GetNotas(notas:string){
        return this.notas;
    }*/
    }
}