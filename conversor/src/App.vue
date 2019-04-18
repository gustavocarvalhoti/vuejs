<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br/>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Conversor moeda-a="USD" moeda-b="BLR"/>
    <Conversor moeda-a="BLR" moeda-b="USD"/>
  </div>
</template>

<script>
  /*import HelloWorld from './components/HelloWorld.vue'*/
  import Conversor from './components/Conversor.vue'

  export default {
    name: 'app',
    components: {
      Conversor
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
