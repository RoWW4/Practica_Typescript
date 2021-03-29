//Importamos las clases para poder ser usadas en el main
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";
import { Persona } from "./Persona";

//Creamos 3 direcciones, 3 emails y 3 teléfonos
let direccion1 = new Direccion('calle cielo', 5, 'bajo', 'd', 11500, 'El Puerto', 'Cadiz');
let direccion2 = new Direccion('avenida libertad', 4, 'primero', 'b', 11480, 'Jerez', 'Cadiz');
let direccion3 = new Direccion('calle pinto', 17, 'tercero', 'a', 11028, 'Chiclana', 'Cadiz');
var arrayDirecciones: any = [direccion1, direccion2, direccion3];

let mail1 = new Mail('Personal', 'rocio@gmail.com');
let mail2 = new Mail('Trabajo', 'pepeformacion@gmail.com');
let mail3 = new Mail('Personal', 'africa@hotmail.com');
var arrayMails: any  = [mail1, mail2, mail3];

let telefono1 = new Telefono('Personal', 652479812);
let telefono2 = new Telefono('Trabajo', 684523654);
let telefono3 = new Telefono('Personal', 954120214);
var arrayTelefonos: any= [telefono1, telefono2, telefono3];



let persona1 = new Persona("Rocio", "Beato Martin", 30, "12345678A", new Date(1991 / 3 / 10),
    'azul', 'Mujer', arrayDirecciones(direccion1, direccion2), arrayMails(mail1), arrayTelefonos(telefono1), 'nota1');
let persona2 = new Persona("Pepe", "García Pérez", 43, "22222222B", new Date(1978 / 12 / 25),
    'amarillo', 'Hombre', arrayDirecciones(direccion2), arrayMails(mail2), arrayTelefonos(telefono2), 'nota2');
let persona3 = new Persona("Africa", "Amador Sanchez", 20, "33333333C", new Date(2001 / 8 / 14),
    'verde', 'Mujer', arrayDirecciones(direccion3), arrayMails(mail3), arrayTelefonos(telefono3), 'nota3');
//let arrayPersonas: string[] = [persona1];
    var arrayPersonas: any[] = [persona1, persona2, persona3];

/***************************IMPRIMIR PERSONAS********************************/
