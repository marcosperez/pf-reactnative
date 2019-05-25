# Iniciar

```bash
react-native run-android
yarn start
```

# Arquitectura

_Leer_

- [Definicion de librerias y arquitectura por features](https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc)
- [Comparaciones](https://medium.freecodecamp.org/how-to-structure-your-project-and-manage-static-resources-in-react-native-6f4cfc947d92)

## Librerias definidas

- jest — Javascript testing
- axios — Http Client
- fastlane — Automation tool (build and releases)

## Libreria no definidas

### Navegacion

- react-navigation — Application navigation
- react-router

### Estado de la aplicacion

#### Redux

- redux — Application state management
- redux-thunk — Enabling asynchronous dispatching of actions
- reselect — Selector library for Redux

_Investigar:_

- https://egghead.io/courses/getting-started-with-redux
- https://es.redux.js.org/

#### Mobx

- https://mobx.js.org/

## Estructura de carpetas

- fastlane: Configuracion de despliegue
- src
  - api: ccontiene la logica de comunicacion con apis externas
  -
