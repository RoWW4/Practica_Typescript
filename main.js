"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos las clases para poder ser usadas en el main
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var Persona_1 = require("./Persona");
var persona1 = new Persona_1.Persona("Rocio", "Beato Martin", 30, "12345678A", new Date(1991 / 3 / 10), 'azul', 'Mujer', [new Direccion_1.Direccion('calle cielo', 5, 'bajo', 'd', 11500, 'El Puerto', 'Cadiz')], [new Mail_1.Mail('Personal', 'rocio@gmail.com')], [new Telefono_1.Telefono('Personal', 652479812)], 'nota1');
var persona2 = new Persona_1.Persona("Pepe", "García Pérez", 40, "22222222B", new Date(1981 / 2 / 27), 'azul', 'Mujer', [new Direccion_1.Direccion('avenida libertad', 4, 'primero', 'b', 11480, 'Jerez', 'Cadiz')], [new Mail_1.Mail('Trabajo', 'pepeformacion@gmail.com')], [new Telefono_1.Telefono('Trabajo', 684523654)], 'nota2');
var persona3 = new Persona_1.Persona("Africa", "Amador Sanchez", 20, "33333333C", new Date(2001 / 8 / 14), 'verde', 'Mujer', [new Direccion_1.Direccion('calle pinto', 17, 'tercero', 'a', 11028, 'Chiclana', 'Cadiz')], [new Mail_1.Mail('Personal', 'africa@hotmail.com')], [new Telefono_1.Telefono('Personal', 954120214)], 'nota3');
/***************************IMPRIMIR PERSONAS********************************/
//Introduzca la persona que quiere mostrar (persona1, persona2, persona3):
imprimirPersona(persona3);
/***************************INTRODUCIR DATOS*********************************/
//Hacemos la búsqueda por DNI y vamos a añadir una nueva direccion, mail y telefono a la persona que coincida el DNI
busquedaDni('33333333C');
var arrayPersonas = [persona1, persona2, persona3];
//Función para imprimir personas
function imprimirPersona(persona) {
    console.log('/////////////IMPRIMIENDO PERSONA/////////////');
    console.log('Nombre: ' + persona.nombre);
    console.log('Apellidos: ' + persona.apellidos);
    console.log('Edad: ' + persona.edad);
    console.log('DNI: ' + persona.dni);
    console.log('Cumpleaños: ' + persona.cumpleanios);
    console.log('Color favorito: ' + persona.color);
    console.log('Sexo: ' + persona.sexo);
    for (var i = 0; i < persona.direcciones.length; i++) {
        console.log(persona.direcciones[i]);
    }
    for (var i = 0; i < persona.mails.length; i++) {
        console.log(persona.mails[i]);
    }
    for (var i = 0; i < persona.telefonos.length; i++) {
        console.log(persona.telefonos[i]);
    }
    console.log('Notas: ' + persona.notas);
}
//Funcion para buscar por DNI y añadir direccion, mail y telefono
function busquedaDni(dni) {
    for (var i = 0; i < arrayPersonas.length; i++) {
        if (arrayPersonas[i].dni == dni) {
            arrayPersonas[i].direcciones.push([new Direccion_1.Direccion('calle nueva', 8, 'segundo', 'c', 12111, 'Sevilla', 'Sevilla')]);
            arrayPersonas[i].mails.push([new Mail_1.Mail('Trabajo', 'nuevoemail@gmail.com')]);
            arrayPersonas[i].telefonos.push([new Telefono_1.Telefono('Trabajo', 669823541)]);
            console.log('/////////////IMPRIMIENDO PERSONA CON NUEVOS CAMBIOS/////////////');
            imprimirPersona(arrayPersonas[i]);
        }
    }
}
