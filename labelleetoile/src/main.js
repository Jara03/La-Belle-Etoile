import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'
import router from "./router/index";



const app = createApp(App)

app.use(router);
app.use(VueTailwindDatepicker)
app.mount('#app')