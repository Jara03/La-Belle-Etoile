import { createApp } from 'vue'
import App from './App.vue'
import '../dist/output.css'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

/*
axios.put('http://localhost:1337/api/i-calendar',{
    data:{
        icalData:{"c'est trop":"tes please"}
    }
})
    .then(response => {
    console.log(response)
});



axios.get('http://localhost:1337/api/i-calendar').then(response => {
    console.log(response);
});


 */


const app = createApp(App)

app.use(VueTailwindDatepicker)
app.mount('#app')