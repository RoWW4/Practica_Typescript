"use strict";
exports.__esModule = true;
//Importamos las clases para poder ser usadas en el main
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var Persona_1 = require("./Persona");
//Creamos 3 direcciones, 3 emails y 3 teléfonos
var direccion1 = new Direccion_1.Direccion('calle cielo', 5, 'bajo', 'd', 11500, 'El Puerto', 'Cadiz');
var direccion2 = new Direccion_1.Direccion('avenida libertad', 4, 'primero', 'b', 11480, 'Jerez', 'Cadiz');
var direccion3 = new Direccion_1.Direccion('calle pinto', 17, 'tercero', 'a', 11028, 'Chiclana', 'Cadiz');
var arrayDirecciones = [direccion1, direccion2, direccion3];
var mail1 = new Mail_1.Mail('Personal', 'rocio@gmail.com');
var mail2 = new Mail_1.Mail('Trabajo', 'pepeformacion@gmail.com');
var mail3 = new Mail_1.Mail('Personal', 'africa@hotmail.com');
var arrayMails = [mail1, mail2, mail3];
var telefono1 = new Telefono_1.Telefono('Personal', 652479812);
var telefono2 = new Telefono_1.Telefono('Trabajo', 684523654);
var telefono3 = new Telefono_1.Telefono('Personal', 954120214);
var arrayTelefonos = [telefono1, telefono2, telefono3];
//let arrayPersonas: string[] = [persona1];
var persona1 = new Persona_1.Persona("Rocio", "Beato Martin", 30, "12345678A", new Date(1991 / 3 / 10), 'azul', 'Mujer', arrayDirecciones(direccion1, direccion2), arrayMails(mail1), arrayTelefonos(telefono1), 'nota1');
var persona2 = new Persona_1.Persona("Pepe", "García Pérez", 43, "22222222B", new Date(1978 / 12 / 25), 'amarillo', 'Hombre', arrayDirecciones(direccion2), arrayMails(mail2), arrayTelefonos(telefono2), 'nota2');
var persona3 = new Persona_1.Persona("Africa", "Amador Sanchez", 20, "33333333C", new Date(2001 / 8 / 14), 'verde', 'Mujer', arrayDirecciones(direccion3), arrayMails(mail3), arrayTelefonos(telefono3), 'nota3');
var arrayPersonas = [persona1, persona2, persona3];
/***************************IMPRIMIR PERSONAS********************************/
console.log(persona1);
