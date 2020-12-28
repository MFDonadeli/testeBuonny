<?php

namespace App\Controller\Api;

use App\Controller\AppController;

/**
 * Pedido ClienteController
 *
 * @property \App\Model\Table\ClienteTable $Pedido
 *
 * @method \App\Model\Entity\Pedido[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ClienteController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Http\Response|null
     */
    public function index()
    {
        $cliente = $this->Cliente->find('all');

        $this->set([
            'data' => $cliente,
            '_serialize' => ['data']
        ]);
    }

    /**
     * View method
     *
     * @param string|null $id Cliente id.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $cliente = $this->Cliente->get($id);

        $this->set([
            'data' => $cliente,
            '_serialize' => ['data']
        ]);
    }
}