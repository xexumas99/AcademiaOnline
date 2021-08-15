# Descripción del proyecto
Este proyecto está basado en un ejemplo que se puede realizar en el curso gratuito de Udemy <a href="https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis/">Introducción a GraphQL desde las bases hasta crear APIs</a> impartido por <a href="https://www.udemy.com/user/anartzmugika/">Anartz Mugika Ledo
</a>.

Se trata de una api desarrollada con node y express donde uso graphql en una de las llamadas. La finalidad de esta implementación es la de establecer un ejemplo reutilizable para futuros proyectos de node, express y graphql. Separando cada schema en un fichero aparte y agrupándolos en un fichero auxiliar de configuración para que el archivo base del proyecto (app.js) no tenga código excesivo de graphql y se pueda complementar fácilmente con el resto de llamadas rest (ya que a nivel de endpoints, graphql solo ocupa la direccion /graphql).

# Arranque del proyecto

## Instalar dependencias de node

Abrir el terminal o CMD, situarse en la carpeta raiz del proyecto y ejecutar el comando

```
npm i
```

## Arrancar el proyecto node

En la misma carpeta ejecutar el comando 

```
node app
```

[Opcional] Recomendaría tener descargado el paquete global **nodemon** y ejecutar el siguiente comando en lugar del anterior:
```
nodemon app
```

Descargar nodemon globalmente:

```
npm i -g nodemon
```

# Endpoints

- / => Página de bienvenida 
- /graphql => UI de graphql y llamadas graphql 

# Uso

Despues de correr la api podemos ir a la ruta http://localhost:5200/graphql para acceder a la ui de graphql donde, además del playground, podemos ver una breve documentación con los endpoints internos de graphql.

Otra opcion es usar una herramienta como **postman** para hacer una llamada POST a esta misma ruta estableciendo en el body la información que queremos recibir según la sintaxis de graphql.

# Bibliografía

- Documentación de graphql => https://graphql.org/learn/
