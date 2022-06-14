import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import createStore from '@/store'

const app = createApp(App)
app.use(ElementPlus)
app.use(createStore)
app.mount('#app')
