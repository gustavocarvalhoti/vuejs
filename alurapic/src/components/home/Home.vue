<!--Single file template--><!--Apresentação-->
<template>
  <div>
    <h1 class="centralizado" v-meu-transform>{{ titulo }}</h1>
    <input type="search" class="filtro" placeholder="Filtre pelo título da foto" v-on:input="filtro = $event.target.value">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">
        <!--Passa o objeto foto-->
        <meu-painel :foto="foto">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform></imagem-responsiva>
          <!--Passa o evento click para um componente-->
          <!--<meu-botao rotulo="remover" tipo="button" @click.native="remove(foto)"/>-->
          <meu-botao rotulo="remover" tipo="button" @botaoAtivado="remove(foto)" :confirmacao="false" estilo="perigo"/>
          <!--Se não fosse componente era só colocar @click="remove()"-->
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<!--Para aparecer em outro lugar precisa ser exportado--><!--Comportamento e dados-->
<script>
  import Botao from '../shared/botao/Botao.vue';
  import Painel from '../shared/painel/Painel.vue';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

  export default {
    components: {
      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },
    data() {
      return {
        titulo: 'Alurapic',
        fotos: [],
        filtro: ''
      }
    },
    computed: {
      // Como se fosse uma property comum
      fotosComFiltro() {
        // Se digitou alguma coisa
        if (this.filtro) {
          // 'i' - Não é CASEsensitive
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
          return this.fotos;
        }
      }
    },
    methods: {
      remove(foto) {
        if (confirm('Confirma?')) {
          alert(foto.titulo);
        }
      }
    },
    created() {
      /*Gancho do ciclo e vida*/
      this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
      /*Acima já retorna o then e catch, top*/
    }
  }
</script>

<!--Estilo, os 3 juntos define o componente-->
<style scoped>
  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
