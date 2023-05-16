Guía para mi

<rimraf>
Paquete que se utiliza para:
- Eliminar directorios y archivos
Util para tareas de limpieza como eliminar archivos temporales, directorios de archivos generados en compilaciones anteriores.

<morgan>
Middleware que se utiliza para:
- Registrar solicitudes HTTP y errores en la consola del servidor.
Util para la depuracion de aplicaciones web de NodeJS y monitoreo de actividad del servidor.

<express-handlebars>
Es un motor de plantillas para NodeJS que se utiliza para:
- Generar vistas HTML dinamicas en aplicaciones web.
Este paquete proporciona una forma sencilla y eficaz de separar la logica de presentacion del resto de la aplicacion

<nodemon>
Es una herramienta que se utiliza para reiniciar automaticamente la aplicacion en tiempo real cuando se detectan cambios en los archivos del proyecto.

<ts-node>
Paquete que se utiliza para ejecutar codigo TypeScript directamente en Nodejs, sin necesidad de compilar previamente el codigo a JavaScript

-ULTIMOS CAMBIOS-

- Hice la configuracion básica de nodejs
- Configuré el archivo tsconfig.json para que:
  1. "target": "es6", >>> Typescript compilara a Java ES6
  2. "outDir": "./dist", >>> Que typescript compile en un archivo llamado dist
  3. "exclude": ["node_modules"] >>> Excluya la carpeta node_modules cuando compile

"dev": "ts-node src/index.ts"
