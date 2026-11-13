import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Loob Vue rakenduse App.vue komponendi põhjal
const app = createApp(App)

app.use(router)     // Ühendab Vue Routeri rakendusega
app.use(store)      // Ühendab Vuexi andmehoidla rakendusega

app.mount('#app')   // Kuvab Vue rakenduse HTML-is elemendi sees mille id = app