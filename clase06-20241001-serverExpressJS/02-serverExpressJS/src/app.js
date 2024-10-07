// Importar el módulo express para crear un servidor web
const express = require("express");

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Crear una instancia de la aplicación Express
const app = express();

// Definir la ruta raíz ("/") y manejar las solicitudes GET
app.get("/", (req, res) => {
    // Registrar la URL de la solicitud en la consola
    console.log(req.url);
    // Registrar los encabezados de la solicitud en la consola
    console.log(req.headers);
    // Enviar una respuesta simple al cliente
    res.send("Server con ExpressJS (no con módulo HTTP...)");
});

// Definir la ruta "/contacto" y manejar las solicitudes GET
app.get("/contacto", (req, res) => {
    // Enviar una respuesta simple indicando contacto
    res.send("Contacto");
});

// Definir la ruta "/heroes" y manejar las solicitudes GET
app.get("/heroes", (req, res) => {
    
    // Aquí se podría incluir una validación que, en caso de falla, devuelva un error
    // Ejemplo: return res.send("error");

    // Definir un array de héroes con sus propiedades
    let heroes = [
        { id: 1, name: 'Spider-Man', alias: 'Peter Parker', team: 'Avengers', publisher: 'Marvel' },
        { id: 2, name: 'Superman', alias: 'Clark Kent', team: 'Justice League', publisher: 'DC' },
        { id: 3, name: 'Iron Man', alias: 'Tony Stark', team: 'Avengers', publisher: 'Marvel' },
        { id: 4, name: 'Wonder Woman', alias: 'Diana Prince', team: 'Justice League', publisher: 'DC' },
        { id: 5, name: 'Black Widow', alias: 'Natasha Romanoff', team: 'Avengers', publisher: 'Marvel' },
        { id: 6, name: 'Batman', alias: 'Bruce Wayne', team: 'Justice League', publisher: 'DC' },
        { id: 7, name: 'Aquaman', alias: 'Arthur Curry', team: 'Justice League', publisher: 'DC' },
        { id: 8, name: 'Captain America', alias: 'Steve Rogers', team: 'Avengers', publisher: 'Marvel' },
        { id: 9, name: 'Flash', alias: 'Barry Allen', team: 'Justice League', publisher: 'DC' },
        { id: 10, name: 'Black Panther', alias:'TChalla', team:'Avengers', publisher:'Marvel' },
        { id: 11, name:'Green Lantern', alias:'Hal Jordan', team:'Justice League', publisher:'DC' },
        { id: 12, name:'Thor', alias:'Thor Odinson', team:'Avengers', publisher:'Marvel' },
        { id: 13, name:'Batwoman', alias:'Kate Kane', team:'Bat Family', publisher:'DC' },
        { id: 14, name:'Hulk', alias:'Bruce Banner', team:'Avengers', publisher:'Marvel' },
        { id: 15, name:'Zatanna', alias:'Zatanna Zatara', team:'Justice League Dark', publisher:'DC' },
        { id: 16, name:'Doctor Strange', alias:'Stephen Strange', team:'Defenders', publisher:'Marvel' },
        { id :17 ,name:'Green Arrow' ,alias:'Oliver Queen' ,team:'Justice League' ,publisher:'DC'},
        { id :18 ,name:'Scarlet Witch' ,alias:'Wanda Maximoff' ,team:'Avengers' ,publisher:'Marvel'},
        { id :19 ,name:'Martian Manhunter' ,alias:'Jonn Jonzz' ,team:'Justice League' ,publisher:'DC'},
        { id :20 ,name:'Deadpool' ,alias:'Wade Wilson' ,team:'None' ,publisher:'Marvel'}
    ];

    // Enviar el array de héroes como respuesta en formato JSON
    res.send(heroes);
});

// Hacer que la aplicación escuche en el puerto definido y mostrar un mensaje en consola
app.listen(PORT, () => {
    console.log(`Server online en puerto ${PORT}`);
});
/*
Importación del Módulo Express:
Se importa el módulo express, que permite crear aplicaciones web y gestionar rutas de manera sencilla.
Definición del Puerto:
Se define una constante PORT que indica en qué puerto escuchará el servidor (3000).
Creación de la Aplicación Express:
Se crea una instancia de la aplicación Express utilizando express().
Definición de Rutas:
Ruta Raíz (/):
Se define una ruta para manejar solicitudes GET a la raíz del servidor.
Se registran la URL y los encabezados de la solicitud en la consola.
Se envía una respuesta simple al cliente indicando que se está utilizando Express.js.
Ruta /contacto:
Se define una ruta para manejar solicitudes GET a /contacto.
Se envía una respuesta simple indicando "Contacto".
Ruta /heroes:
Se define una ruta para manejar solicitudes GET a /heroes.
Se puede incluir una validación (comentada) que podría devolver un error si es necesario.
Se define un array de héroes con propiedades como id, name, alias, team, y publisher.
Se envía el array de héroes como respuesta en formato JSON.
Escuchar Solicitudes:
La aplicación escucha en el puerto definido (PORT) y muestra un mensaje en consola indicando que el servidor está online.
*/