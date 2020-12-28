import Vue from 'vue'
import ServerConst from '../server'

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
      Vue.http.get(ServerConst.SERVER + '/api/produto.json').then(response => {
        context.commit('updateProdutosList', response.data)
      })
    }
  }
}

