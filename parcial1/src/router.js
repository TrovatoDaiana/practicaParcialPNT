import { createRouter, createWebHistory } from 'vue-router'

import Binding from './components/Binding.vue'
import Estructura from './components/Estructura.vue'
import Atributos from './components/Atributos.vue'
import Formulario from './components/Formulario/index.vue'
import Contadores from './components/contadores.vue'
import Respuestas from './components/Respuestas/index.vue'

const routes = [
    //ruta raiz por defecto
  { path: '/', redirect: '/binding' },
    //rutas activas de los componentes
  { path: '/binding', component: Binding },
  { path: '/estructura', component: Estructura },
  { path: '/atributos', component: Atributos },
  { path: '/formulario', component: Formulario },
  { path: '/contadores', component: Contadores },
  { path: '/respuestas', component: Respuestas },
  //rutas no definidas o existentes
  { path: '/:pathMatch(.*)*', redirect: '/binding' }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router