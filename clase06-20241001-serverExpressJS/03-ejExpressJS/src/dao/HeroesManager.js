// Importar el array de héroes desde un archivo externo
import { heroes } from "../data/heroes.js";

// Definir la clase HeroesManager
export class HeroesManager {
    // Método estático para obtener la lista de héroes
    static getHeroes() {
        // Retornar el array de héroes importado
        return heroes;
    }
}

/*
Importación de Datos:
import { heroes } from "../data/heroes.js";
Se importa un array llamado heroes desde un archivo externo ubicado en la carpeta data. 
Este archivo debe exportar un array que contiene información sobre varios héroes.
La sintaxis de importación utiliza destructuración, lo que significa que se está importando específicamente la variable heroes del módulo.
Definición de la Clase HeroesManager:
export class HeroesManager { ... }
Se define una clase llamada HeroesManager. 
La palabra clave export permite que esta clase sea utilizada en otros módulos o archivos que la importen.
Método Estático getHeroes():
static getHeroes() { ... }
Se define un método estático llamado getHeroes. 
Los métodos estáticos pueden ser llamados directamente en la clase sin necesidad de crear una instancia de la misma.
Este método no recibe parámetros y simplemente retorna el array de héroes importado.
Retorno del Array de Héroes:
return heroes;
El método devuelve el array heroes, permitiendo que otros módulos o componentes accedan a la lista de héroes cuando llamen a este método.
Resumen
Este código proporciona una forma sencilla y organizada de gestionar y acceder a una colección de héroes. 
La clase HeroesManager actúa como un administrador que permite obtener la lista de héroes desde un archivo externo, facilitando así la separación de datos y lógica en una aplicación. 
*/