<template>
  <div class="conversor">
    <h2>{{moedaA}} para {{moedaB}}</h2>
    <input type="text" v-model="moedaA_value" v-bind:placeholder="moedaA">
    <input type="button" value="Converter" v-on:click="converter">
    <h2>{{moedaB_value}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Conversor",            // Nome do componete
    props: ["moedaA", "moedaB"],  // Props
    data() {                      // Dados da tela, para pegar as informações
      return {
        moedaA_value: "",
        moedaB_value: 0
      }
    },
    methods: {                    // Métodos
      converter() {
        let url = "https://free.currencyconverterapi.com/api/v6/convert?apiKey=sample-api-key&q=USD_PHP&compact=y";
        fetch(url).then(res => {  // Faz o get na url acima
          return res.json();
        }).then(json => {         // Pega o resultado do get - toFixed(2) - Duas casas decimais 10,00
          let cotacao = json['USD_PHP'].val;
          this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2);
        })
      }
    }
  }
</script>

<style scoped>
  .conversor {
    padding: 20px;
    max-width: 300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin: 30px;
    float: left;
  }
</style>