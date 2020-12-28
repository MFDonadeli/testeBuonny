import pedidos from './modules/pedidos'
import clientes from './modules/clientes'
import produtos from './modules/produtos'

export default {
  modules: {
    pedido: pedidos,
    cliente: clientes,
    produto: produtos,
  }
}
