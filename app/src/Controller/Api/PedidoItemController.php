<?php

namespace App\Controller\Api;

use App\Controller\AppController;

/**
 * Pedido Controller
 *
 * @property \App\Model\Table\PedidoItemTable $Pedido
 *
 * @method \App\Model\Entity\Pedido[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class PedidoItemController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $params = $this->getRequest()->getQueryParams();

        $pedido = $this->Pedido->find('all', [
            'contain' => ['Cliente'],
        ]);

        // Filtro pra valor mínimo e máximo (para cliente está na model)
        if ((isset($params['valor_min']) && !empty($params['valor_min'])) || (isset($params['valor_max']) && !empty($params['valor_max']))) {
            if (isset($params['valor_min']) && !empty($params['valor_min'])) {
                $pedido->having(['preco_total >=' => $params['valor_min']]);
            }
            if (isset($params['valor_max']) && !empty($params['valor_max'])) {
                $pedido->having(['preco_total <=' => $params['valor_max']]);
            }
        }

        if (isset($params['cliente']) && $params['cliente'] != '0' && $params['cliente'] != 'undefined' ) {
            $pedido->where(['Pedido.cliente_id = ' => $params['cliente']]);
        }

        //dd($pedido);


        $this->set([
            'data' => $pedido,
            '_serialize' => ['data']
        ]);
    }

    /**
     * View method
     *
     * @param string|null $id PedidoItem id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $pedidoitem = $this->PedidoItem->get($id, [
            'contain' => ['Pedido' => ['Cliente'], 'Produto'],
        ]);
        
        $this->set([
            'data' => $pedidoitem,
            '_serialize' => ['data']
        ]);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $pedido = $this->PedidoItem->newEntity();

        $pedido->pedido_id = $this->request->getData()["data"]["pedido_id"];
        $pedido->produto_id = $this->request->getData()["data"]["produto_id"];
        $pedido->quantidade = $this->request->getData()["data"]["quantidade"];

        if ($this->PedidoItem->save($pedido)) {
            $message = 'Saved';
        } else {
            $message = 'Error';
        }

        $this->set([
            'data' => $pedido,
            'message' => $message,
            '_serialize' => ['data', 'message']
        ]);
        
    }

    /**
     * Edit method
     *
     * @param string|null $id PedidoItem id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $pedido = $this->PedidoItem->get($id);
        //$pedido = $this->PedidoItem->patchEntity($pedido, $this->request->getData());
         
        $pedido->quantidade = $this->request->getData()["data"]["quantidade"];

        if ($this->PedidoItem->save($pedido)) {
            $message = 'Saved';
        } else {
            $message = 'Error';
        }

        $this->set([
            'data' => $pedido,
            'message' => $message,
            '_serialize' => ['data', 'message']
        ]);
    }

    /**
     * Delete method
     *
     * @param string|null $id PedidoItem id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $pedido = $this->PedidoItem->get($id);
        if ($this->PedidoItem->delete($pedido)) {
            $message = 'Deleted';
        } else {
            $message = 'Error';
        }

        $this->set([
            'data' => $pedido,
            'message' => $message,
            '_serialize' => ['data', 'message']
        ]);
    }
}