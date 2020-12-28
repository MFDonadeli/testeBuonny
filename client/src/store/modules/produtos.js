import Vue from 'vue'

export default {
  state: {
    produtoList: []
  },
  mutations: {
    updateProdutosList (state, data) {
      state.produtoList = data
    }
  },
  actions: {
    getProdutos (context) {
      Vue.http.get('http://localhost:8765/api/produto.json').then(response => {
        context.commit('updateProdutosList', response.data)
      })
    }
  }
}

//https://github.com/schoolofnetcom/cakephp-vue/blob/master/client/src/components/Accounts/Create.vue
//https://github.com/schoolofnetcom/cakephp-restful-rev-2/blob/master/src/Controller/AppController.php