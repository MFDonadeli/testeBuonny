<template>
    <div>
        <PedidosFind 
          :clientes="clientes"
          @findPedidosEvent="findPedidos"></PedidosFind>
          <p><a href='/pedidos/novo'>Adicionar Novo</a></p>
        <table border="1">
            <thead>
              <tr>
                <th>Id</th>
                <th>Cliente</th>
                <th>Valor Total</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pedido, index) in pedidos.data" :key="index">
                <td>{{pedido.id}}</td>
                <td>{{pedido.cliente.nome}}</td>
                <td>{{pedido.preco_total}}</td>
                <td><a :href='"/pedidos/" + pedido.id + "/editar"'> Editar</a></td>
                <td><a href="" @click.prevent="remove(pedido.id)">Excluir</a></td>
              </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import PedidosFind from './PedidosFind'
  export default {
    name: 'pedidos',
    components: {
      PedidosFind
    },
    methods: {
      goTo: function (id) {
        this.$router.push('/pedido/' + id)
      },
      findPedidos(data) {
        const querystr = ["valor_min=" + data.valor_min, "valor_max=" + data.valor_max, "cliente=" + data.cliente].join('&')
      
        this.$store.dispatch('getPedido', querystr)  
      },
      remove: function (id) {
        this.$store.dispatch('removePedido', id).then(this.$store.dispatch('getPedidos'));
      }
    },
    computed: {
      pedidos () {
        return this.$store.state.pedido.pedidoList
      },
      clientes () {
        return this.$store.state.cliente.clienteList
      }
    },
    created () {
      this.$store.dispatch('getPedidos')
      this.$store.dispatch('getClientes')
    }
  }
</script>