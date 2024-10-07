// Importar el módulo express para crear un servidor web
import express from "express";
// Importar la clase HeroesManager desde un archivo externo
import { HeroesManager } from "./dao/HeroesManager.js";

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Crear una instancia de la aplicación Express
const app = express();

// Definir la ruta raíz ("/") y manejar las solicitudes GET
app.get("/", (req, res) => {
    // Enviar una respuesta HTML simple al cliente con un mensaje de bienvenida
    res.send(`<h2 style="color:blue;">Bienvenidos...!!!</h2>`);
});

// Definir la ruta "/heroes" y manejar las solicitudes GET
app.get("/heroes", (req, res) => {
    // Obtener la lista de héroes utilizando el método estático de HeroesManager
    let heroes = HeroesManager.getHeroes();

    // Enviar la lista de héroes como respuesta en formato JSON
    res.send(heroes);
});

// Hacer que la aplicación escuche en el puerto definido y mostrar un mensaje en consola
app.listen(PORT, () => {
    console.log(`Server escuchando el puerto ${PORT}`);
});

/*
Explicación del Código
Importación de Módulos:
import express from "express";
Se importa el módulo express, que permite crear aplicaciones web y gestionar rutas de manera sencilla.
import { HeroesManager } from "./dao/HeroesManager.js";
Se importa la clase HeroesManager desde un archivo externo. 
Esta clase se espera que contenga métodos para gestionar la colección de héroes.
Definición del Puerto:
const PORT = 3000;
Se define una constante PORT que indica en qué puerto escuchará el servidor (3000).
Creación de la Aplicación Express:
const app = express();
Se crea una instancia de la aplicación Express utilizando express(). Esta instancia se utilizará para definir rutas y manejar solicitudes.
Definición de Rutas:
Ruta Raíz (/):
Se define una ruta para manejar solicitudes GET a la raíz del servidor.
Cuando se accede a esta ruta, se envía una respuesta HTML simple que muestra un mensaje de bienvenida en color azul.
Ruta /heroes:
Se define una ruta para manejar solicitudes GET a /heroes.
Se llama al método estático getHeroes() de la clase HeroesManager para obtener la lista de héroes.
La lista de héroes se envía como respuesta al cliente.
Escuchar Solicitudes:
app.listen(PORT, () => {...});
La aplicación escucha en el puerto definido (PORT) y muestra un mensaje en consola indicando que el servidor está escuchando en ese puerto.
Resumen
Este código proporciona una estructura básica para un servidor web utilizando Express.js. 
Permite responder a solicitudes en dos rutas: 
la raíz (/), que muestra un mensaje de bienvenida, y /heroes, que devuelve una lista de héroes gestionada por la clase HeroesManager.
*/