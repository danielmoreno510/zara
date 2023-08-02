Este es un proyecto desarrollado con Next.Js
## Ejecutar

ambiente de desarrollo:

```bash
npm run dev
```

ambiente de producción:

```bash
npm run build
npm run start
```

## Librerías

para el desarrollo de esta aplicación se usaron las siguientes librerías:

- Redux (Sagas)
- Axios
- immer

## Metodología

Se implementó redux para manejar el estado de la aplicación, cuando se ejecuta una acción y la saga es disparada se hace la validación de los datos en el localStorage si existen y tienen menos de un día esos datos serán obtenidos y se guardarán en el store de redux, si no existen datos, se consumirá el servicio para obtenerlos y guardarlos en el localStorage

En patrones de diseño se implementó: composición, propagación y la separación de componentes contenedores y componentes de presentación

Se implementó un HOC para el componente del Loading indicator, adicionalmente se usó typescript con sus respectivos tipos de datos

Se creó el archivo _app.tsx para agregar un layout y manejar la aplicación como SPA