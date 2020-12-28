<template>
    <div>
        <div v-if="this.$route.params.id">
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
                  <td><a href="" @click.prevent="remove(pedido._joinData.id)">Excluir</a></td>
                </tr>
              </tbody>
          </table>
          Valor Total: {{pedidos.data.preco_total}}
        </div>
        <div v-else>
           Cliente:<select class="browser-default" v-model="newCli.cliente_id">
            <option value="0">Todos</option>
            <option v-for="(cliente, index) in clientes.data" :key="index" v-bind:value="cliente.id">{{ cliente.nome }}</option>
          </select>
          <button @click="addNew">Adicionar Novo</button>          
        </div>
    </div>
</template>
<script>
  export default {
    name: 'pedidos',
    data: function () {
        return {
            newCli:{
                cliente_id: 0
            }
        }
    },
    methods: {
      addNew: function () {
        this.$store.dispatch('addPedidoToSend',this.newCli).then((res) => {
            this.$router.push("/pedidoitem/" + res.data.id + "/novo")
        })
        
      },
      remove: function (id) {
        this.$store.dispatch('removeItem', id)
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
      this.$store.dispatch('getPedidoItens', this.$route.params.id)
      this.$store.dispatch('getClientes')
    }
  }
</script>