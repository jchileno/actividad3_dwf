import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Nosotros from '@/views/Nosotros.vue'
import EspDerechoPenal from '@/views/EspDerechoPenal.vue'
import EspDerechoCivil from '@/views/EspDerechoCivil.vue'
import Clientes from '@/views/Clientes.vue'
import Galeria from '@/views/Galeria.vue'
import Consultas from '@/views/ConsultasOnline.vue'
import Contacto from '@/views/Contacto.vue'
import Especialidades from '@/views/Especialidades.vue'

const routes = [
  { path: '/', name: '', component: HomeView },
  { path: '/inicio', name: 'inicio', component: HomeView },
  { path: '/nosotros', name: 'nosotros', component: Nosotros },
  { path: '/especialidades', name: 'Especialidades', component: Especialidades },
  { path: '/derechopenal', name: 'Derecho Penal', component: EspDerechoPenal },
  { path: '/derechocivil', name: 'Derecho Civil', component: EspDerechoCivil },
  { path: '/clientes', name: 'Clientes', component: Clientes },
  { path: '/galeria', name: 'Galeria', component: Galeria },
  { path: '/consultasonline', name: 'ConsultasenLinea', component: Consultas },
  { path: '/contacto', name: 'Contacto', component: Contacto }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
