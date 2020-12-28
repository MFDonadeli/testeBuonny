import Vue from 'vue'

export default {
    state: {
      pedidoList: [],
      itemPedidoToSend: {
        pedido_id: null,
        produto_id: null,
        quantidade: 0
      },
      pedidoItem: []
    },
    mutations: {
      updatePedidoList (state, data) {
        state.pedidoList = data
      },
      updatePedidoView (state, data) {
        state.pedidoView = data
      },
      updatePedidoItem (state, data) {
        state.pedidoItem = data
      }
    },
    actions: {
      getPedidos (context) {
        Vue.http.get('http://localhost:8765/api/pedido.json').then(response => {
          context.commit('updatePedidoList', response.data)
        })
      },
      getPedido (context, id) {
        Vue.http.get('http://localhost:8765/api/pedido.json?' + id).then(response => {
          context.commit('updatePedidoList', response.data)
        })
      },
      getPedidoItens (context, id) {
        Vue.http.get('http://localhost:8765/api/pedido/' + id + ".json").then(response => {
          context.commit('updatePedidoList', response.data)
        })
      },
      getItemPedido (context, id) {
        Vue.http.get('http://localhost:8765/api/pedido_item/' + id + ".json").then(response => {
          context.commit('updatePedidoItem', response.data)
        })        
      },
      updateItemToSend (context, params) {
        console.log(params)
        let data = JSON.stringify({data: params})
        Vue.http.patch('http://localhost:8765/api/pedido_item/' + params.id + ".json", data)
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