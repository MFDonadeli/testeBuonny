<template>
    <div>
        Cliente:{{pedidos.data.cliente.nome}}
        <p><a href='/pedidos'>Voltar</a></p>
        <p><a :href='"/pedidoitem/" + this.$route.params.id + "/novo"'>Adicionar Novo</a></p>
        <table border="1">
            <thead>
              <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Valor Unitário</th>
                <th>Quantidade</th>
                <th>Valor Total</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pedido, index) in pedidos.data.produtos" :key="index">
                <td>{{pedido.id}}</td>
                <td>{{pedido.descricao}}</td>
                <td>{{pedido.preco}}</td>
                <td>{{pedido._joinData.quantidade}}</td>
                <td>{{pedido.preco * pedido._joinData.quantidade}}</td>
                <td><a :href='"/pedidoitem/" + pedido._joinData.pedido_id + "/editar/" + pedido._joinData.id'> Editar</a></td>
                <td>Excluir</td>
              </tr>
            </tbody>
        </table>
        Valor Total: {{pedidos.data.preco_total}}
    </div>
</template>
<script>
  export default {
    name: 'pedidos',
    methods: {
      goTo: function (id) {
        this.$router.push('/pedido/' + id)
      },
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
      this.$store.dispatch('getPedidoItens', this.$route.params.id)
      this.$store.dispatch('getClientes')
    }
  }
</script>