<template>
    <div>
        <label>Cliente</label>
        <select class="browser-default" v-model="form.cliente">
            <option value="0">Todos</option>
            <option v-for="(cliente, index) in clientes.data" :key="index" v-bind:value="cliente.id">{{ cliente.nome }}</option>
        </select>
        Valor <input type="text" v-model="form.valor_min"> até <input type="text" v-model="form.valor_max"> <br>
        <button @click="emitFind()">Pesquisar</button>
    </div>
</template>

<script>
export default {
    props: ['clientes'],
    data: function () {
        return {
            form: {
                valor_min: '',
                valor_max: ''
            }
        }
    },
    methods: {
        emitFind() {
           this.$emit('findPedidosEvent', this.form)
        }
    }
}
</script>