<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repo
2. Ejecutar el comando
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Copiar el archivo __.env.template__ y renombrar la copia a __.env__
6. LLenar las variables de entorno definidas en __.env__
7. Levantar el proyecto con:
```
yarn start:dev
```
8. Cargar el seed en la base de datos
```
http://localhost:3000/api/seed
```

## Stack usado
* Mongodb
* Nest
*