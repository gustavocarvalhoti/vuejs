//import Vue from 'vue';

/*Vue.directive('meu-transform', { <- Global*/
export default { //Precisa importar agora
  bind(el, binding, vnode) {
    let current = 0;
    // Roda a foto ao receber um dblclick
    el.addEventListener('dblclick', function () {
      /*
      // Parametro nomeado
      let incremento = 90;
      let animate = false;

      if(binding.value) {
        incremento = binding.value.incremento;
        animate = binding.value.animate;
      }

      current+=incremento;
      this.style.transform = `rotate(${current}deg)`;
      // Girar de vagar
      if (animate) this.style.transition = "transform 0.5s";
      */

      /*
      let incremento = binding.value || 90;
      if(binding.modifiers.reverse) {
        current-=incremento;
      } else {
        current+=incremento;
      }

      this.style.transform = `rotate(${current}deg)`;
      if (binding.modifiers.animate) this.style.transition = "transform 0.5s";
      */

      // console.log("PRINT");
      // console.log(vnode.context.propriedadeDoComponenteNoQualADiretivaFoiAssociada);

      let incremento = binding.value || 0;
      let efeito;
      if (!binding.arg || binding.arg === 'rotate') {
        if (binding.modifiers.reverse) {
          current -= incremento;
        } else {
          current += incremento;
        }
        efeito = `rotate(${current}deg)`;
      } else if (binding.arg === 'scale') {
        efeito = `scale(${incremento})`;
      }

      this.style.transform = efeito;
      if (binding.modifiers.animate) this.style.transition = "transform 0.5s";
    });
  }
  /*});*/
}
