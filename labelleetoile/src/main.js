import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

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

createApp(App).mount('#app')
