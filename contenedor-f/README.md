## Comandos disponibles

En el directorio de este proyecto tú podrás correr:
### `npm install`
Este deberá ser el primer comando que deberás correr si quieres instalar las dependencias del proyecto
para luego trabajar sobre él. Debido a que node_modules es muy pesado no se sube al repositorio
así que con npm install podrás instalar las dependencias del package.json para tener un proyecto
listo para desarrollar.
### `npm start`

Corre la aplicación en modo desarrollo. [http://localhost:3000](http://localhost:3000)

### `npm test`
### `npm run build`

Crea el build de la aplicación el cual está reducido gracias a webpack, mismo que luego es copiado
al contenedor de apache. Apache sólo recibe la carpeta build, no el proyecto entero.
### Datos extra

*La razón por la que no refresca la página es débido al DOM virtual y gracias al uso de ReactRouter.
* Se utilizó MaterialUI para la interfaz gráfica, mismo que está basado en el patrón de diseño de Material Design de Google.
* El sitio es en su mayoría responsivo.