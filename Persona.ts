import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanios: Date;
    private color: string;
    private sexo: string;
    private direcciones: string[];
    private mails: string[];
    private telefonos: number[];
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
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
}
