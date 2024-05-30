import TwicPics from '@twicpics/components/vue3'
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.js';
import './assets/main.css';

import { createApp } from 'vue';
import { createStore } from 'vuex'; // Import createStore from vuex
import App from './App.vue';
import router from './router';

import '@twicpics/components/style.css'


// Créez votre store
const store = createStore({
    state: {
      isNext: false
    },
    mutations: {
      setIsNext(state, value) {
        state.isNext = value;
      }
    }
})

const app = createApp(App);

app.use(TwicPics, {
  domain: `https://demo.twic.pics`,
})

app.use(router);
app.use(store); // Utilisez votre store

app.mount('#app');