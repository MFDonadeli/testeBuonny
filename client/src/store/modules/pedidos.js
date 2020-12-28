import Vue from 'vue'
import ServerConst from '../server'

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
        Vue.http.get(ServerConst.SERVER + '/api/pedido.json').then(response => {
          context.commit('updatePedidoList', response.data)
        })
      },
      getPedido (context, id) {
        Vue.http.get(ServerConst.SERVER + '/api/pedido.json?' + id).then(response => {
          context.commit('updatePedidoList', response.data)
        })
      },
      getPedidoItens (context, id) {
        Vue.http.get(ServerConst.SERVER + '/api/pedido/' + id + ".json").then(response => {
          context.commit('updatePedidoList', response.data)
        })
      },
      async addPedidoToSend  (context, params) {
        let data = JSON.stringify({data: params})
        let response = await Vue.http.post(ServerConst.SERVER + '/api/pedido.json', data)
        return response.data
      },
      getItemPedido (context, id) {
        Vue.http.get(ServerConst.SERVER + '/api/pedido_item/' + id + ".json").then(response => {
          context.commit('updatePedidoItem', response.data)
        })        
      },
      updateItemToSend (context, params) {
        let data = JSON.stringify({data: params})
        Vue.http.patch(ServerConst.SERVER + '/api/pedido_item/' + params.id + ".json", data)
      },
      addItemToSend (context, params) {
        let data = JSON.stringify({data: params})
        Vue.http.post(ServerConst.SERVER + '/api/pedido_item.json', data)
      },
      removePedido (context, id) {
        let data = {
          'data': {
            'id': id
          }
        }
        Vue.http.delete(ServerConst.SERVER + '/api/pedido/' + id + ".json", JSON.stringify(data))
      },
      removeItem (context, id) {
        let data = {
          'data': {
            'id': id
          }
        }
        Vue.http.delete(ServerConst.SERVER + '/api/pedido_item/' + id + ".json", JSON.stringify(data))
      },
    }
  }