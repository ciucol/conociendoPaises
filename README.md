# Conociendo Asia / Primer proyecto ReactJS Alone

### `Día 1`

**Domingo 9 de mayo de 2021 - 7:30pm**

1. Inicio el proyecto usando
   ```
   npx create-react-app nombredelproyecto //el nombre del proyecto debe ser todo minúsculas
   ```
2. Creo la carpeta `components` para crear y administrar los componentes
3. Creo la carpeta `pages` para manejar todas las vistas
   Ambas cosas las hago en `src`
4. Creo un repo en GitHub, agregó localmente el remote usando

   ```
   git remote add origin nombreDelRepoEnGithub
   ```

5. Instalo `React Router`para manejar las rutas usando `npm install react-router-dom`
6. creo en la carpeta `components` un archivo `routes`para manejar las rutas de la app que serán 3 el path `/` que mostrará la landing, el path `/countries` que mostrarà la lista de países y el path `/about` que carga este readme, voy a tratar de traerlo de la API de github. No se si se pueda hacer -> [Documentación Api de Github](https://docs.github.com/en/rest/reference/repos#get-a-repository)
7. Creo una carpeta `ìmg`

## Estos son los diseños de la primera versión

<figure>
    <img src="./src/img/1 - Screen 1.png">
    <figcaption>Landing día - path="/"</figcaption>
    <br/>
    <img src="./src/img/2 - Screen  2.png">
    <figcaption>Países día - path="/countries"</figcaption>
    <br/>
    <img src="./src/img/3 - Screen  3.png">
    <figcaption>Landing noche (aún no se si es otro path) - path="/"</figcaption>
    <br/>
    <img src="./src/img/4 - Screen  4.png">
    <figcaption>Países noche (aún no se si es otro path) - path="/countries"</figcaption>
    <br/>
</figure>

8. Reviso la documentación de GitHub para escribir de manera decente un Readme 😳 -> [Documentación Readme - GitHub](https://docs.github.com/es/github/writing-on-github/basic-writing-and-formatting-syntax)
   > ha pasado una hora y aún no inicio con el código
9. Voy a crear las rutas y para eso miro la documentación e [React Router](https://reactrouter.com/web/guides/quick-start)
10. Voy primero a crear la vista `/countries`y para eso voy a descomponer en componentes y a crear estos

<figure>
    <img src="./src/img/components/2 - countries_components.png"/>
    <figcaption>Países por componentes</figcaption>
</fugure>

11. Voy a usar dos API's: https://restcountries.eu/rest/v2/region/asia para obtener los países y su info y https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=japon para la descripción del país desde wikipedia (este fue el primer resultado que encontré, seguramente debo buscar más).
12. Voy a crear el componente `CardsCountries` que es el que llama a `CardCountry`
13. Voy a crear el primer componente `Country` que consume la API de países y lo voy a usar dentro del componente `CardsCountries` y el componente `CardCountry`
14.
