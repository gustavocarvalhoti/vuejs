import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes'; // tem que vir entre chaves, porque não é default

//Deixa disponível para todos os componentes
Vue.use(VueResource);

//Gerencia as toras
Vue.use(VueRouter);

const router = new VueRouter({
  routes ,
  mode: 'history' /* Remove o # da URL */
});

//Apresenta meu objeto para a View, virando global
new Vue({
  el: '#app',
  router,
  render: renderizar => renderizar(App)
});
