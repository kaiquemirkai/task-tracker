import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Pagina mais importante do componente, onde tudo sera montado para a view
createApp(App)
.use(router)
.mount('#app')
