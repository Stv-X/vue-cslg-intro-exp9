import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vant from 'vant'
import 'vant/lib/index.css'

const vm=createApp(App)
vm.use(router)
vm.use(Vant)
vm.mount('#app')
