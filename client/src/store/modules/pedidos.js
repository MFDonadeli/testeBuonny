import Vue from 'vue'

export default {
    state: {
      pedidoList: [],
      pedidoView: {}
    },
    mutations: {
      updatePedidoList (state, data) {
        state.pedidoList = data
      },
      updatePedidoView (state, data) {
        state.pedidoView = data
      }
    },
    actions: {
      getPedidos (context) {
        Vue.http.get('http://localhost:8765/api/pedido').then(response => {
          context.commit('updatePedidoList', response.data)
        })
      },
      getPedido (context, id) {
        Vue.http.get('api/pedido/' + id).then(response => {
          context.commit('updatePedidoView', response.data)
        })
      },
      newPedido (context, data) {
        Vue.http.post('api/pedido', JSON.stringify({data: data}))
      },
      updatePedido (context, params) {
        let data = JSON.stringify({data: params})
        Vue.http.patch('api/pedido/' + params.id, data)
      },
      removePedido (context, id) {
        let data = {
          'data': {
            'type': 'pedidos',
            'id': id
          }
        }
        Vue.http.delete('api/pedido/' + id, JSON.stringify(data))
      }
    }
  }