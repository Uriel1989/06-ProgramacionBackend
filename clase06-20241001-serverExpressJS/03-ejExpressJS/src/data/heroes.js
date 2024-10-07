// Exportar un array constante de héroes
export const heroes = [
    {
        id: 1,
        name: 'Spider-Man',
        alias: 'Peter Parker',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 2,
        name: 'Superman',
        alias: 'Clark Kent',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 3,
        name: 'Iron Man',
        alias: 'Tony Stark',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 4,
        name: 'Wonder Woman',
        alias: 'Diana Prince',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 5,
        name: 'Black Widow',
        alias: 'Natasha Romanoff',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 6,
        name: 'Batman',
        alias: 'Bruce Wayne',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 7,
        name: 'Aquaman',
        alias: 'Arthur Curry',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 8,
        name: 'Captain America',
        alias: 'Steve Rogers',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 9,
        name: 'Flash',
        alias: 'Barry Allen',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 10,
        name: 'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id: 11,
        name:'Green Lantern',
        alias:'Hal Jordan',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id: 12,
        name:'Thor',
        alias:'Thor Odinson',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id: 13,
        name:'Batwoman',
        alias:'Kate Kane',
        team:'Bat Family',
        publisher:'DC',
    },
    {
        id: 14,
        name:'Hulk',
        alias:'Bruce Banner',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id: 15,
        name:'Zatanna',
        alias:'Zatanna Zatara',
        team:'Justice League Dark', 
         publisher:'DC'
     },
     {
         id :16 ,
         name:'Doctor Strange' ,
         alias:'Stephen Strange' ,
         team:'Defenders' ,
         publisher:'Marvel'
     },
     {
         id :17 ,
         name:'Green Arrow' ,
         alias:'Oliver Queen' ,
         team:'Justice League' ,
         publisher:'DC'
     },
     {
         id :18 ,
         name:'Scarlet Witch' ,
         alias:'Wanda Maximoff' ,
         team:'Avengers' ,
         publisher:'Marvel'
     },
     {
         id :19 ,
         name:'Martian Manhunter' ,
         alias:'Jonn Jonzz' ,
         team:'Justice League' ,
         publisher:'DC'
     },
     {
         id :20 ,
         name:'Deadpool' ,
         alias:'Wade Wilson' ,
         team:'None' ,
         publisher:'Marvel'
     }
];

/*
Explicación del Código
Exportación del Array:
export const heroes = [...]
Se utiliza la palabra clave export para hacer que la constante heroes esté disponible para ser importada en otros módulos o archivos. 
Esto permite que otros componentes de la aplicación accedan a esta lista de héroes.
Definición del Array de Héroes:
const heroes = [...]
Se define una constante llamada heroes, que es un array que contiene objetos. 
Cada objeto representa un héroe y tiene varias propiedades.
Estructura de Cada Objeto:
Cada objeto en el array tiene las siguientes propiedades:
id (número): Un identificador único para cada héroe.
name (string): El nombre del héroe (por ejemplo, "Spider-Man").
alias (string): El nombre real o el alias del héroe (por ejemplo, "Peter Parker").
team (string): El equipo al que pertenece el héroe (por ejemplo, "Avengers" o "Justice League").
publisher (string): La editorial que publica las historias del héroe (por ejemplo, "Marvel" o "DC").
Ejemplos de Héroes:
El array incluye varios héroes conocidos, como Spider-Man, Superman, Iron Man, y muchos más, cada uno con sus respectivas propiedades definidas.
Resumen
Este código proporciona una estructura organizada para almacenar información sobre varios héroes en un formato fácil de usar. 
Al exportar el array, se permite su reutilización en diferentes partes de la aplicación, facilitando la gestión y el acceso a los datos de los héroes.
*/