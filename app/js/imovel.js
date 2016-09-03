// definindo
var ImovelComponent = Vue.extend({
  template: '<div class="row around-xs"><div class="col-xs-12 col-sm-3 col-md-2 col-lg-4"><div class="apartamento"></div></div><div class="col-xs-12 col-sm-3 col-md-2 col-lg-4"><div class="casa"></div></div><div class="col-xs-12 col-sm-3 col-md-2 col-lg-4"><div class="terreno"></div></div></div>'
})

// registrando
Vue.component('imovel-component', ImovelComponent)

// create a root instance
new Vue({
  el: '#imovel'
})