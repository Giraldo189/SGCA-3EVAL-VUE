import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Clientes from 'src/views/Clientes.vue';
import Financiamientos from 'src/views/Financiamiento.vue';
import Pruebadeconduccion from 'src/views/Pruebas_de_conduccion.vue';
import Vehiculos from 'src/views/Vehiculos.vue';
import Ventas from '/src/views/Ventas.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/financiamientos',
    name: 'Financiamientos',
    component: Financiamientos
  },
  {
    path: '/pruebadeconduccion',
    name: 'pruebadeconduccion',
    component: Pruebadeconduccion
  },
  {
    path: '/vehiculos',
    name: 'vehiculos',
    component: Vehiculos
  },
  {
    path: '/ventas',
    name: 'ventas',
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
