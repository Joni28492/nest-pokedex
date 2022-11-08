<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI installado

```
npm i -g @nestjs/cli
```

4. Levatar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar a **.env**

6. Relevar las variables de entorno definidas en el **.env**

7. Ejecutar la aplicacion en dev:

```
yarn start:dev
```

7. Reconstruir la base de datos con la semilla

```
localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest

# Notas

Heroku Redeploy

```
git commit --allow-empty -m "trigger Heroku deploy"
git push heroku <master|main>
```
