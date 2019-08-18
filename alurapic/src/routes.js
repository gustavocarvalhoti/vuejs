const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');
const Teste = () => System.import('./components/cadastro/Teste.vue');

import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name: 'home', component: Home, titulo: 'Home', menu: true},
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true},
    { path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false},
    { path: '/teste', name: 'teste', component: Teste, titulo: 'Teste', menu: true},
    { path: '*', component: Home, menu: false}
];