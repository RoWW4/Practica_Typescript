//Importamos las clases para poder ser usadas en el main
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";
import { Persona } from "./Persona";

//Creamos 3 direcciones, 3 emails y 3 teléfonos
let direccion1 = new Direccion('calle cielo', 5, 'bajo', 'd', 11500, 'El Puerto', 'Cadiz');
let direccion2 = new Direccion('avenida libertad', 4, 'primero', 'b', 11480, 'Jerez', 'Cadiz');
let direccion3 = new Direccion('calle pinto', 17, 'tercero', 'a', 11028, 'Chiclana', 'Cadiz');

let mail1 = new Mail('Personal', 'rocio@gmail.com');
let mail2 = new Mail('Trabajo', 'rocioformacion@gmail.com');
let mail3 = new Mail('Personal', 'manolo@hotmail.com');

let telefono1 = new Telefono('Personal', 652479812);
let telefono2 = new Telefono('Trabajo', 684523654);
let telefono3 = new Telefono('Personal', 954120214);

//let arrayPersonas: string[] = [persona1];

let persona1 = new Persona("Rocio", "Beato Martin", 30, "12345678A", new Date(1977 / 12 / 25),
    'azul', 'Mujer', direcciones(direccion1, direccion2), mails(mail1), telefonos(telefono1), 'nota1');
//let persona2 = new Persona();
//let persona3 = new Persona();
//crear array de personas

