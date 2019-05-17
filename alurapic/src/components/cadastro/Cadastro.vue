<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>
    <!--Para não carregar a página-->
    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <!--<input :value="foto.titulo" @input="foto.titulo = $event.target.value" id="titulo" autocomplete="off">-->
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo">
      </div>
      <div class="controle">
        <label for="url">URL</label>
        <!--<input :value="foto.url" @input="foto.url = $event.target.value" id="url" autocomplete="off">-->
        <!--.lazy - Posterga a requisição do input para quando sair do input-->
        <input id="url" autocomplete="off" v-model.lazy="foto.url">
        <div class=size-500>
          <!--v-show="foto.url" -> Se tiver preenchido ele mostra-->
          <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo"/>
        </div>
      </div>
      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <!--<textarea :value="foto.descricao" id="descricao" autocomplete="off" @input="foto.descricao = $event.target.value"></textarea>-->
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
      </div>
      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit"/>
        <router-link to="/">
          <meu-botao rotulo="VOLTAR" tipo="button"/>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import Foto from '../../domain/foto/Foto'
  import Botao from '../shared/botao/Botao.vue';
  import FotoService from '../../domain/foto/FotoService';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'

  export default {
    components: {
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },
    data() {
      return {
        foto: new Foto()
      }
    },
    methods: {
      grava() {
        this.service
        .cadastra(this.foto)
        .then(() => this.foto = new Foto(), err => console.log(err));

        /*
        // O método save realiza um POST por debaixo dos panos enviado os dados passado como parâmetro
        this.resource
        .save(this.foto)
        .then(() => this.foto = new Foto(), err => console.log(err));
        */

        /*
        this.$http
        .post('v1/fotos', this.foto)
        .then(() => this.foto = new Foto(), err => console.log(err));
        */
      }
    },
    created() {
      // Inicia o serviço
      this.service = new FotoService(this.$resource);
    }
  }
</script>

<style scoped>

  .centralizado {
    text-align: center;
  }

  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }

  .controle label {
    display: block;
    font-weight: bold;
  }

  .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

  .size-500 {
    width: 500px;
  }
</style>
