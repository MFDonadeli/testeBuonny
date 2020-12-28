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

//https://github.com/schoolofnetcom/cakephp-vue/blob/master/client/src/components/Accounts/Create.vue
//https://github.com/schoolofnetcom/cakephp-restful-rev-2/blob/master/src/Controller/AppController.php