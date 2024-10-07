// Importar el módulo express para crear un servidor web
import express from "express";

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Crear una instancia de la aplicación Express
const app = express();

// Definir la ruta raíz ("/") y manejar las solicitudes GET
app.get("/", (req, res) => {
    // Enviar una respuesta simple al cliente indicando que se está en la página de inicio
    res.send(`Home Page`);
});

// La siguiente ruta está comentada y no se ejecutará.
// app.get("/", (req, res) => {
//     res.send(`otra Home Page`);
// });

// Definir la ruta "/saludo/:nombre/:apellido" y manejar las solicitudes GET
app.get("/saludo/:nombre/:apellido", (req, res) => {
    // Registrar la URL de la solicitud en la consola
    console.log(req.url);
    // Registrar los encabezados de la solicitud en la consola
    console.log(req.headers);

    // Obtener los parámetros 'nombre' y 'apellido' de la URL
    let nombre = req.params.nombre;
    let apellido = req.params.apellido;

    // Enviar una respuesta personalizada usando los parámetros recibidos
    res.send(`Hola ${nombre} ${apellido}. Primera ruta...!!!`);
});

// Definir otra ruta "/saludo/:apodo/:textoSaludo" y manejar las solicitudes GET
app.get("/saludo/:apodo/:textoSaludo", (req, res) => {
    // Registrar la URL de la solicitud en la consola
    console.log(req.url);
    // Registrar los encabezados de la solicitud en la consola
    console.log(req.headers);

    // Esta parte está comentada y no se usará en esta ruta.
    // let nombre = req.params.nombre;
    // let apellido = req.params.apellido;

    // Enviar una respuesta simple utilizando los parámetros recibidos
    res.send(`Hola ${req.params.apodo}, ${req.params.textoSaludo}`);
});

// Hacer que la aplicación escuche en el puerto definido y mostrar un mensaje en consola
app.listen(PORT, () => {
    console.log(`server escuchando el puerto ${PORT}`);
});

/*
Explicación del Código
Importación del Módulo Express:
import express from "express";
Se importa el módulo express, que permite crear aplicaciones web y gestionar rutas de manera sencilla.
Definición del Puerto:
const PORT = 3000;
Se define una constante PORT que indica en qué puerto escuchará el servidor (3000).
Creación de la Aplicación Express:
const app = express();
Se crea una instancia de la aplicación Express utilizando express(). 
Esta instancia se utilizará para definir rutas y manejar solicitudes.
Definición de Rutas:
Ruta Raíz (/):
Se define una ruta para manejar solicitudes GET a la raíz del servidor.
Cuando se accede a esta ruta, se envía una respuesta simple indicando que se está en la "Home Page".
Ruta Duplicada Comentada:
Hay otra definición de ruta para / comentada. Si se descomenta, esta ruta sobrescribirá a la anterior, ya que ambas manejan el mismo path.
Ruta /saludo/:nombre/:apellido:
Se define una ruta para manejar solicitudes GET a /saludo/:nombre/:apellido, donde :nombre y :apellido son parámetros dinámicos.
Se registran la URL y los encabezados de la solicitud en la consola.
Se obtienen los parámetros nombre y apellido desde req.params.
Se envía una respuesta personalizada usando los valores obtenidos.
Ruta /saludo/:apodo/:textoSaludo:
Se define otra ruta para manejar solicitudes GET a /saludo/:apodo/:textoSaludo, donde :apodo y :textoSaludo son otros parámetros dinámicos.
Se registran nuevamente la URL y los encabezados en la consola.
La parte que obtiene otros parámetros (nombre y apellido) está comentada y no se utiliza.
Se envía una respuesta simple utilizando los parámetros recibidos.
Escuchar Solicitudes:
app.listen(PORT, () => {...});
La aplicación escucha en el puerto definido (PORT) y muestra un mensaje en consola indicando que el servidor está escuchando en ese puerto.
Resumen
Este código proporciona una estructura básica para un servidor web utilizando Express.js. 
Permite responder a solicitudes en dos rutas diferentes con parámetros dinámicos, lo que permite personalizar las respuestas según los datos proporcionados por el usuario.
*/