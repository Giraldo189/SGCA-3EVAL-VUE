import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Clientes from '../views/Clientes.vue';
import Financiamientos from '../views/Financiamiento.vue';
import Pruebadeconduccion from '../views/Pruebas_de_conduccion.vue';
import Vehiculos from '../views/Vehiculos.vue';
import Ventas from '../views/Ventas.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'Cliente',
    component: Clientes
  },
  {
    path: '/financiamientos',
    name: 'Financiamiento',
    component: Financiamientos
  },
  {
    path: '/pruebadeconduccion',
    name: 'Pruebadeconduccion',
    component: Pruebadeconduccion
  },
  {
    path: '/vehiculos',
    name: 'Vehiculo',
    component: Vehiculos
  },
  {
    path: '/ventas',
    name: 'Venta',
    component: Ventas
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
