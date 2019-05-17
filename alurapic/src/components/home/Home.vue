<!--Single file template--><!--Apresentação-->
<template>
  <div>
    <h1 class="centralizado" v-meu-transform>{{ titulo }}</h1>
    <!-- novo elemento para exibir mensagens para o usuário -->
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" class="filtro" placeholder="Filtre pelo título da foto" v-on:input="filtro = $event.target.value">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro">
        <!--Passa o objeto foto-->
        <meu-painel :foto="foto">
          <!--<imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform="{incremento: 90, animate: true}"></imagem-responsiva>-->
          <!--<imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform.animate.reverse="15"></imagem-responsiva>-->
          <!--<imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:rotate.animate.reverse="30"/>-->
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animate="1.2"/>
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
  // importou  diretiva. Tem que adicionar na propriedade directives logo abaixo!
  import transform from '../../directives/Transform';
  // importando FotoService
  import FotoService from '../../domain/foto/FotoService';

  export default {
    components: {
      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },
    directives: {
      'meu-transform': transform
    },
    data() {
      return {
        titulo: 'Alurapic',
        fotos: [],
        filtro: '',
        mensagem: ''
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
          this.service.apaga(foto._id)
          .then(
            () => {
              this.fotos.splice(this.fotos.indexOf(foto), 1);
              this.mensagem = 'Foto removida com sucesso'
            },
            err => {
              this.mensagem = 'Não foi possível remover a foto';
              console.log(err);
            }
          );

          /*
          this.resource
          .delete({id: foto._id})
          .then(
            () => {
              let indice = this.fotos.indexOf(foto);
              this.fotos.splice(indice, 1);
              this.mensagem = 'Foto removida com sucesso'
            },
            err => {
              this.mensagem = 'Não foi possível remover a foto';
              console.log(err);
            }
          );
          */

          /*
          this.$http
          .delete(`v1/fotos/${foto._id}`)
          .then(() => {
              // assim que apagar, exibe a mensagem para o usuário
              this.mensagem = 'Foto removida com sucesso';
              // Acha a posição da foto na lista e remove
              this.fotos.splice(this.fotos.indexOf(foto), 1);
            },
            err => {
              this.mensagem = 'Não foi possível remover a foto';
              console.log(err);
            }
          )
          */
        }
      }
    },
    created() {
      // Inicia o serviço
      this.service = new FotoService(this.$resource);

      // Pode trocar por esse \0/
      this.service.lista().then(fotos => this.fotos = fotos, err => console.log(err));

      /*
      // Dessa maneira pode ser utilizado pelo delete tb
      this.resource = this.$resource('v1/fotos{/id}');
      this.resource
      .query()
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
      */

      /*
      this.$http.get('v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
       // Acima já retorna o then e catch, top
      */
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
