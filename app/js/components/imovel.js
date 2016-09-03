// definindo
var ImovelComponent = Vue.extend({
  template: '<div class="row around-xs"><div class="col-xs-12 col-sm-3 col-md-2 col-lg-4"><div class="apartamento"><div><p>apartamentos</p></div></div></div><div class="col-xs-12 col-sm-3 col-md-2 col-lg-4"><div class="casa"><div><p>casas</p></div></div></div><div class="col-xs-12 col-sm-3 col-md-2 col-lg-4"><div class="terreno"><div><p>terrenos</p></div></div></div></div>'
})

// registrando
Vue.component('imovel-component', ImovelComponent)

// create a root instance
new Vue({
  el: '#imovel'
})