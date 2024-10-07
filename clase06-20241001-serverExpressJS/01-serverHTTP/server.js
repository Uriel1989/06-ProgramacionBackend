// Importar el módulo http para crear un servidor web
const http = require("http");
// Importar el módulo url para manejar y analizar URLs
const url = require("url");

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    // Registrar la URL de la solicitud en la consola
    console.log(req.url);
    
    // Analizar la URL de la solicitud y convertirla en un objeto
    const urlParsed = url.parse(req.url, true);
    console.log(urlParsed); // Mostrar el objeto URL analizado en la consola

    // Manejar la ruta "/contacto"
    if (req.url === "/contacto") {
        // Establecer el tipo de contenido de la respuesta como texto plano
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        // Enviar una respuesta simple
        return res.end(`Contacto...!!!`);
    }

    // Manejar la ruta "/"
    if (req.url === "/") {
        // Establecer el tipo de contenido de la respuesta como texto plano
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        // Enviar una respuesta simple indicando que el servidor está corriendo
        return res.end(`Server con módulo HTTP`);
    }

    // Manejar la ruta "/heroes"
    if (req.url === "/heroes") {
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
            { id: 10, name: 'Black Panther', alias: 'TChalla', team: 'Avengers', publisher: 'Marvel' },
            { id: 11, name: 'Green Lantern', alias: 'Hal Jordan', team: 'Justice League', publisher: 'DC' },
            { id: 12, name: 'Thor', alias: 'Thor Odinson', team: 'Avengers', publisher: 'Marvel' },
            { id: 13, name: 'Batwoman', alias: 'Kate Kane', team: 'Bat Family', publisher: 'DC' },
            { id: 14, name: 'Hulk', alias: 'Bruce Banner', team: 'Avengers', publisher: 'Marvel' },
            { id: 15, name: 'Zatanna', alias: 'Zatanna Zatara', team: 'Justice League Dark', publisher: 'DC' },
            { id: 16, name: 'Doctor Strange', alias:'Stephen Strange', team:'Defenders', publisher:'Marvel'},
            { id :17 ,name:'Green Arrow' ,alias:'Oliver Queen' ,team:'Justice League' ,publisher:'DC'},
            { id :18 ,name:'Scarlet Witch' ,alias:'Wanda Maximoff' ,team:'Avengers' ,publisher:'Marvel'},
            { id :19 ,name:'Martian Manhunter' ,alias:'Jonn Jonzz' ,team:'Justice League' ,publisher:'DC'},
            { id :20 ,name:'Deadpool' ,alias:'Wade Wilson' ,team:'None' ,publisher:'Marvel'}
        ];
        
        // Establecer el tipo de contenido de la respuesta como JSON
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        // Enviar la lista de héroes como respuesta en formato JSON
        return res.end(JSON.stringify(heroes));
    }
    
    // Si no coincide con ninguna ruta anterior, enviar un error 404
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.end(`error 404 | not found`);
});

// Hacer que el servidor escuche en el puerto definido y mostrar un mensaje en consola
server.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`);
});

/*
Importación de Módulos:
Se importan los módulos http y url para crear un servidor y manejar URLs.
Definición del Puerto:
Se define una constante PORT que indica en qué puerto escuchará el servidor (3000).
Creación del Servidor:
Se crea un servidor HTTP utilizando http.createServer(), que toma una función callback para manejar las solicitudes (req) y respuestas (res).
Registro de Solicitudes:
Se registra la URL de cada solicitud en la consola usando console.log(req.url).
Análisis de URL:
Se utiliza url.parse(req.url, true) para analizar la URL y obtener un objeto que contiene información sobre ella.
Manejo de Rutas:
Ruta /contacto:
Si la URL es /contacto, se establece el encabezado Content-Type a texto plano y se envía una respuesta simple.
Ruta /:
Si la URL es /, se envía un mensaje indicando que el servidor está corriendo.
Ruta /heroes:
Si la URL es /heroes, se define un array de objetos que representan varios héroes.
Se establece el encabezado Content-Type a JSON y se envía el array convertido a formato JSON como respuesta.
Ruta no encontrada:
Si la URL no coincide con ninguna de las rutas anteriores, se envía un mensaje de error 404.
Escuchar Solicitudes:
El servidor escucha en el puerto definido (PORT) y muestra un mensaje en consola indicando que está corriendo.
*/
