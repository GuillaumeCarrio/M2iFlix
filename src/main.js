import { createApp } from 'vue'
import { setLocale } from 'yup'
import { fr } from 'yup-locales'
import {createPinia} from 'pinia'
import { configure } from 'vee-validate'


import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
const pinia = createPinia()
setLocale(fr)
app.config.globalProperties.BASE_URL = "http://localhost:5555"
app
    .use(router)
    .use(pinia)
    .mount('#app')
