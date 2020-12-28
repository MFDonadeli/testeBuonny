<template>
    <div>
        <p>Cliente: {{item.data.Cliente.nome}}</p>
        <p>Produto: {{item.data._matchingData.Produto.descricao}}</p>
        <p>Quantidade: <input type="number" :value="itemD.quantidade" @change="qtdeChange">
        <button @click="save()">Salvar</button></p>
        <p>Preço Unitario: {{item.data._matchingData.Produto.preco}}</p>
        <p>Preço Total: {{item.data._matchingData.Produto.preco * itemD.quantidade}}</p>
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
          this.$store.dispatch('updateItemToSend',this.itemD).then(() => {
            this.$router.push('/pedidos/'+this.$route.params.idpedido+"/editar")
          })
      },
      qtdeChange: function(value) {
          if(this.item.data) {
            this.itemD.id = this.item.data.id
            this.itemD.pedido_id = this.item.data.pedido_id
            this.itemD.produto_id = this.item.data._matchingData.Produto.id
            this.itemD.quantidade = value.srcElement.value
          }
      }
    },
    computed: {
      item() {  
        return this.$store.state.pedido.pedidoItem
      }
    },
    created () {
      this.$store.dispatch('getItemPedido', this.$route.params.iditem)
    }
  }
</script>