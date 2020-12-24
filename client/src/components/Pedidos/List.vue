<template>
    <div class="card-content">
        <table class="highlight">
            <thead>
                <tr>
                    <th>contas</th>
                </tr>
            </thead>
            <tbody>
                 <tr v-for="(pedido, index) in pedidos" :key="index">
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
  export default {
    name: 'pedidos',
    methods: {
      goTo: function (id) {
        this.$router.push('/pedido/' + id)
      }
    },
    computed: {
      accounts () {
        return this.$store.state.pedido.pedidoList
      }
    },
    created () {
      this.$store.dispatch('getPedidos')
    }
  }
</script>