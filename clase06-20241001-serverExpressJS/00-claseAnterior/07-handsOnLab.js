// Importar el módulo 'fs' para manejar el sistema de archivos
const fs = require("fs");

// Definir la ruta del archivo donde se almacenarán los usuarios
let rutaArchivo = "./archivos/Usuarios.json";

// Clase para gestionar usuarios
class UsuariosManager {
    // Propiedad privada para almacenar la ruta del archivo
    #path = "";

    // Constructor que inicializa la ruta del archivo
    constructor(rutaArchivo) {
        this.#path = rutaArchivo;
    }

    // Método asíncrono para obtener la lista de usuarios
    async getUsuarios() {
        // Verificar si el archivo existe
        if (fs.existsSync(this.#path)) {
            // Leer el contenido del archivo y esperar a que se complete la operación
            let usuarios = await fs.promises.readFile(this.#path, { encoding: "utf-8" });
            // Parsear el contenido JSON a un objeto JavaScript y devolverlo
            return JSON.parse(usuarios);
        } else {
            // Si el archivo no existe, devolver un array vacío
            return [];
        }
    }

    // Método asíncrono para agregar un nuevo usuario
    async addUsuario(nombre, email, apellido) {
        // Validar que los campos 'nombre' y 'email' sean proporcionados
        if (!nombre || !email) {
            console.log(`nombre | email son requeridos`);
            return;
        }

        // Obtener la lista actual de usuarios
        let usuarios = await this.getUsuarios();
        
        // Verificar si ya existe un usuario con el mismo email
        let existe = usuarios.find(u => u.email === email);
        if (existe) {
            throw new Error(`El usuario con email ${email} ya existe en BD`);
        }

        // Asignar un nuevo ID al usuario
        let id = 1; // Valor predeterminado para el primer usuario
        if (usuarios.length > 0) {
            // Si ya hay usuarios, asignar el ID máximo + 1
            id = Math.max(...usuarios.map(d => d.id)) + 1;
        }
        
        // Crear un nuevo objeto de usuario con los datos proporcionados
        let nuevoUsuario = {
            id, nombre, email, apellido
        };

        // Agregar el nuevo usuario al array de usuarios
        usuarios.push(nuevoUsuario);

        // Escribir el array actualizado de usuarios en el archivo JSON
        await fs.promises.writeFile(this.#path, JSON.stringify(usuarios, null, 5));

        // Devolver el nuevo usuario agregado
        return nuevoUsuario;
    }
}

// Función asíncrona para manejar operaciones con archivos y usuarios
const archivos = async () => {
    // Crear una instancia de UsuariosManager con la ruta del archivo
    let usuariosManager = new UsuariosManager(rutaArchivo);
    
    try {
        // Obtener y mostrar la lista de usuarios en consola
        console.log(await usuariosManager.getUsuarios());

        // Descomentar las siguientes líneas para agregar un usuario (ejemplo)
        // await usuariosManager.addUsuario("Carlos", "carlos@test.com", "Rodriguez");
        
        // Comprobar si existe un usuario con email "sabrina@test.com"
        let usuarios = await usuariosManager.getUsuarios();
        let existe = usuarios.find(u => u.email === "sabrina@test.com");
        
        // Si no existe, agregar a Sabrina como nuevo usuario
        if (!existe) {
            await usuariosManager.addUsuario("Sabrina", "sabrina@test.com", "Rojas");
        }

        // Mostrar la lista actualizada de usuarios en consola
        console.log(await usuariosManager.getUsuarios());
        
    } catch (error) {
        // Manejar cualquier error que ocurra durante las operaciones
        console.log("Ocurrió un error...!!!");
    }
}

// Ejecutar la función archivos()
archivos();


/*
Explicación del Código
Importación del Módulo fs:
Se importa el módulo fs que permite interactuar con el sistema de archivos.
Definición de la Ruta del Archivo:
Se define una variable rutaArchivo que contiene la ubicación del archivo JSON donde se almacenarán los datos de los usuarios.
Clase UsuariosManager:
Propiedad Privada #path: Se utiliza para almacenar la ruta del archivo de forma privada.
Constructor: Inicializa la propiedad #path con la ruta del archivo proporcionada al crear una instancia de la clase.
Método getUsuarios():
Comprueba si el archivo existe utilizando fs.existsSync().
Si existe, lee su contenido y lo convierte de JSON a objeto JavaScript usando JSON.parse().
Si no existe, devuelve un array vacío.
Método addUsuario(nombre, email, apellido):
Valida que se proporcionen los campos nombre y email.
Obtiene la lista actual de usuarios.
Verifica si ya existe un usuario con el mismo email; si es así, lanza un error.
Asigna un ID único al nuevo usuario.
Crea un objeto nuevoUsuario con los datos proporcionados.
Agrega este objeto al array de usuarios.
Escribe el array actualizado en el archivo JSON utilizando fs.promises.writeFile().
Devuelve el nuevo usuario agregado.
Función Asíncrona archivos():
Crea una instancia de UsuariosManager.
Intenta obtener y mostrar la lista inicial de usuarios.
Comprueba si existe un usuario específico (Sabrina) y lo agrega si no está presente.
Muestra nuevamente la lista actualizada de usuarios.
Manejo de Errores:
Se utiliza un bloque try/catch para manejar errores durante las operaciones asíncronas.
Ejecución:
La función archivos() se llama al final para ejecutar todas las operaciones definidas.
Este código es útil para gestionar una lista de usuarios almacenada en formato JSON, permitiendo agregar nuevos registros y verificar su existencia. 
Si tienes más preguntas o necesitas más detalles sobre alguna parte específica, ¡no dudes en preguntar!
*/