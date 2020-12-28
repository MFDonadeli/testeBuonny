<template>
    <div>
        <div v-if="this.$route.params.iditem">
            <p>Cliente: {{item.data.Cliente.nome}}</p>
            <p>Produto: {{item.data._matchingData.Produto.descricao}}</p>
            <p>Quantidade: <input type="number" :value="itemD.quantidade" @change="qtdeChange">
            <button @click="save()">Salvar</button></p>
            <p>Preço Unitario: {{item.data._matchingData.Produto.preco}}</p>
            <p>Preço Total: {{item.data._matchingData.Produto.preco * itemD.quantidade}}</p>
        </div>
        <div v-else>
            <select class="browser-default" v-model="itemD.produto_id">
                <option value="0">Todos</option>
                <option v-for="(produto, index) in produtos.data" :key="index" v-bind:value="produto.id">{{ produto.descricao }}</option>
            </select>
            <p>Quantidade: <input type="number" :value="itemD.quantidade" @change="qtdeChange">
            <button @click="save()">Salvar</button></p>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'item',
    data: function () {
        return {
            itemD:{
                id: 0,
                pedido_id: null,
                produto_id: null,
                quantidade: 0
            }
        }
    },
    methods: {
      goTo: function (id) {
        this.$router.push('/pedido/' + id)
      },
      save() {
          if(this.$route.params.iditem) {
            this.$store.dispatch('updateItemToSend',this.itemD).then(() => {
                this.$router.push('/pedidos/'+this.$route.params.idpedido+"/editar")
            })
          }
          else {
            this.$store.dispatch('addItemToSend',this.itemD).then(() => {
                this.$router.push('/pedidos/'+this.$route.params.idpedido+"/editar")
            })
          }
      },
      qtdeChange: function(value) {
          if(this.item.data) {
            this.itemD.id = this.item.data.id
            this.itemD.pedido_id = this.item.data.pedido_id
            this.itemD.produto_id = this.item.data._matchingData.Produto.id
            this.itemD.quantidade = value.srcElement.value
          }
          else {
            this.itemD.pedido_id = this.$route.params.idpedido
            this.itemD.quantidade = value.scrElement.value
          }
          
      }
    },
    computed: {
      item() {  
        return this.$store.state.pedido.pedidoItem
      },
      produtos () {
        console.log(this.$store.state.produto)
        return this.$store.state.produto.produtoList
      }
    },
    created () {
        if(this.$route.params.iditem) {
            this.$store.dispatch('getItemPedido', this.$route.params.iditem)
        }
        else {
            this.$store.dispatch('getProdutos')
        }
    }
  }
</script>