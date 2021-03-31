//Importamos las clases para poder ser usadas en el main
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";
import { Persona } from "./Persona";

//Creamos 3 personas
let persona1 = new Persona("Rocio", "Beato Martin", 30, "12345678A", new Date(1991 / 3 / 10), 'azul', 'Mujer', 
    [new Direccion('calle cielo', 5, 'bajo', 'd', 11500, 'El Puerto', 'Cadiz')], 
    [new Mail('Personal', 'rocio@gmail.com')], 
    [new Telefono('Personal', 652479812)], 'nota1');
let persona2 = new Persona("Pepe", "García Pérez", 40, "22222222B", new Date(1981 / 2 / 27), 'amarillo', 'Hombre', 
    [new Direccion('avenida libertad', 4, 'primero', 'b', 11480, 'Jerez', 'Cadiz')], 
    [new Mail('Trabajo', 'pepeformacion@gmail.com')], 
    [new Telefono('Trabajo', 684523654)], 'nota2');
let persona3 = new Persona("Africa", "Amador Sanchez", 20, "33333333C", new Date(2001 / 8 / 14),'verde', 'Mujer', 
    [new Direccion('calle pinto', 17, 'tercero', 'a', 11028, 'Chiclana', 'Cadiz')], 
    [new Mail('Personal', 'africa@hotmail.com')], 
    [new Telefono('Personal', 954120214)], 'nota3');

//Creamos array con las personas existentes
var arrayPersonas: any[] = [persona1, persona2, persona3];

/***************************IMPRIMIR PERSONAS********************************/
//Introduzca la persona que quiere mostrar (persona1, persona2, persona3)
imprimirPersona(persona3);

/***************************INTRODUCIR DATOS*********************************/
//Hacemos la búsqueda por DNI y podemos añadir una nueva direccion, mail o telefono a la persona que coincida el DNI que introduzcamos
//Cuando se modifique la persona se imprimirá directamente con los nuevos datos
insertarDireccion('12345678A');
insertarMail('22222222B');
insertarTelefono('12345678A');


//Función para imprimir personas
function imprimirPersona(persona: Persona){
    console.log('/////////////IMPRIMIENDO PERSONA/////////////')
    console.log('Nombre: ' + persona.nombre);
    console.log('Apellidos: ' + persona.apellidos);
    console.log('Edad: '+ persona.edad);
    console.log('DNI: ' + persona.dni);
    console.log('Cumpleaños: ' + persona.cumpleanios);
    console.log('Color favorito: ' + persona.color);
    console.log('Sexo: ' + persona.sexo);
    for (let i = 0; i < persona.direcciones.length; i++) {
         console.log(persona.direcciones[i]);
    }
    for (let i = 0; i < persona.mails.length; i++) {
        console.log(persona.mails[i]);
    }
    for (let i = 0; i < persona.telefonos.length; i++) {
        console.log(persona.telefonos[i]);
    }
    console.log('Notas: ' + persona.notas);
}

function insertarDireccion(dni: string){
    for (let i = 0; i < arrayPersonas.length; i++) {
        if(arrayPersonas[i].dni == dni){
            console.log('//////////AÑADIENDO DIRECCION//////////');
            arrayPersonas[i].direcciones.push(new Direccion('calle insertar direccion', 8, 'segundo', 'c', 12111, 'Sevilla', 'Sevilla'));
            console.log('//////////DIRECCION AÑADIDA////////////')
            imprimirPersona(arrayPersonas[i]);
        } 
    } 
}

function insertarMail(dni: string){
    for (let i = 0; i < arrayPersonas.length; i++) {
        if(arrayPersonas[i].dni == dni){
        console.log('//////////AÑADIENDO EMAIL//////////');
        arrayPersonas[i].mails.push(new Mail('Trabajo','insertarmail@gmail.com'));
        console.log('//////////EMAIL AÑADIDO////////////')
        imprimirPersona(arrayPersonas[i]);
        }
    }
}

function insertarTelefono(dni: string){
    for (let i = 0; i < arrayPersonas.length; i++) {
        if(arrayPersonas[i].dni == dni){
        console.log('//////////AÑADIENDO TELEFONO//////////');
        arrayPersonas[i].telefonos.push(new Telefono('Personal', 645123582));
        console.log('//////////TELEFONO AÑADIDO////////////')
        imprimirPersona(arrayPersonas[i]);
        }
    }
}

