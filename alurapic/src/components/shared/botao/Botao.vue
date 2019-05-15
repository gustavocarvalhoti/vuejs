<template>
  <button :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{rotulo}}</button>
</template>

<script>
  export default {
    props: {
      tipo: {
        required: true,
        type: String
      },

      rotulo: {
        required: true,
        type: String
      },

      confirmacao: {
        required: false,
        default: false,
        type: Boolean
      },

      estilo: {
        required: false,
        default: 'padrao',
        type: String
      }
    },
    methods: {
      disparaAcao() {
        // Exibindo o tipo da propriedade. Sem o ':' será string, com ':' será boolean
        //console.log(typeof (this.confirmacao));

        if (this.confirmacao) {
          if (confirm('Confirma operacao?')) {
            this.$emit('botaoAtivado');
          }
          return;
        }
        this.$emit('botaoAtivado');
      }
    },
    computed: {
      // Verifica o estilo que foi passado na prop
      estiloDoBotao() {
        // se o valor é padrão ou não passou nada para estilo
        if (this.estilo === 'padrao') {
          return 'botao botao-padrao';
        }
        if (this.estilo === 'perigo') {
          return 'botao botao-perigo';
        }
      }
    }
  }
</script>

<style scoped>
  .botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .botao-perigo {
    background: red;
    color: white;
  }

  .botao-padrao {
    background: blue;
    color: white;
  }
</style>
