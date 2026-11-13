import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Loob Vue Routeri, mis haldab rakenduse erinevaid lehti
const router = createRouter({
  // Kasutab tavapäraseid URL-e
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // Määrab millist komponenti erinevatel aadressidel kuvada
  routes: [
    {
    path: '/',              // Veebilehe juuraadress
    name: 'home',           // Marsruudi nimi
    component: HomeView     // Kuvatakse HomeView komponent
    }
  ],
})

export default router
