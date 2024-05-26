<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/clientes">Clientes</router-link>
    <router-link to="/financiamientos">Financiamientos</router-link>
    <router-link to="/pruebadeconduccion">Pruebas de Conduccion</router-link>
    <router-link to="/vehiculos">Vehiculos</router-link>
    <router-link to="/ventas">Ventas</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
