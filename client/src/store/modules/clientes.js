import Vue from 'vue'
import ServerConst from '../server'

export default {
  state: {
    clienteList: []
  },
  mutations: {
    updateClientesList (state, data) {
      state.clienteList = data
    }
  },
  actions: {
    getClientes (context) {
      Vue.http.get(ServerConst.SERVER + '/api/cliente.json').then(response => {
        context.commit('updateClientesList', response.data)
      })
    }
  }
}

