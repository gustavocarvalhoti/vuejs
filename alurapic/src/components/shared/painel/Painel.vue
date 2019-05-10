<template>
  <div class="painel">
    <!--<h2 class="painel-titulo" v-on:dblclick="visible = !visible">{{foto.titulo}}</h2>-->
    <h2 class="painel-titulo" @dblclick="visible = !visible">{{foto.titulo}}</h2>
    <!--
    Joga essa imagem dentro do SLOT <- Tag do vue.js
    <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
    -->
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  /* props: ['foto'] -> Recebe a propriedade */
  export default {
    props: ['foto'],
    data() {
      return {visible: true}
    }
  }
</script>

<style scoped>
  .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 5px 5px 5px;
  }

  /* Efeito */
  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0
  }

  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .4s
  }
</style>

<!--
Classes geradas dinamicamente
painel-fade-enter         // antes do elemento ser incluído ou removido, o estado atual
painel-fade-enter-active  // quando o elemento esta sendo incluído
painel-fade-leave-active  // quando o elemento esta sendo removido
-->
