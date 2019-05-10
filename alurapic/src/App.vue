<!--Single file template--><!--Apresentação-->
<template>
  <div class="corpo">
    <meu-menu :routes="routes"></meu-menu>
    <!--Alteranar os componentes aqui de acordo com a Rota-->
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {routes} from './routes';
  import Menu from './components/shared/menu/Menu.vue';

  export default {
    components: {
      'meu-menu': Menu
    },
    data() {
      return {
        routes
      }

    }
  }
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  /* Efeito */
  .pagina-enter, .painel-fade-leave-active {
    opacity: 0
  }

  .pagina-enter-active, .painel-fade-leave-active {
    transition: opacity .4s
  }
</style>
