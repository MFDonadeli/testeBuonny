import Vue from 'vue'

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
      Vue.http.get('http://localhost:8765/api/cliente.json').then(response => {
        context.commit('updateClientesList', response.data)
      })
    }
  }
}

