<?php
/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Pedido $pedido
 */
?>
<nav class="large-3 medium-4 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('Edit Pedido'), ['action' => 'edit', $pedido->id]) ?> </li>
        <li><?= $this->Form->postLink(__('Delete Pedido'), ['action' => 'delete', $pedido->id], ['confirm' => __('Are you sure you want to delete # {0}?', $pedido->id)]) ?> </li>
        <li><?= $this->Html->link(__('List Pedido'), ['action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Pedido'), ['action' => 'add']) ?> </li>
        <li><?= $this->Html->link(__('List Pedido Item'), ['controller' => 'PedidoItem', 'action' => 'index']) ?> </li>
        <li><?= $this->Html->link(__('New Pedido Item'), ['controller' => 'PedidoItem', 'action' => 'add']) ?> </li>
    </ul>
</nav>
<div class="pedido view large-9 medium-8 columns content">
    <h3><?= h($pedido->id) ?></h3>
    <table class="vertical-table">
        <tr>
            <th scope="row"><?= __('Id') ?></th>
            <td><?= $this->Number->format($pedido->id) ?></td>
        </tr>
        <tr>
            <th scope="row"><?= __('Cliente Id') ?></th>
            <td><?= $this->Number->format($pedido->cliente_id) ?></td>
        </tr>
    </table>
    <div class="related">
        <h4><?= __('Related Pedido Item') ?></h4>
        <?php if (!empty($pedido->pedido_item)): ?>
        <table cellpadding="0" cellspacing="0">
            <tr>
                <th scope="col"><?= __('Id') ?></th>
                <th scope="col"><?= __('Pedido Id') ?></th>
                <th scope="col"><?= __('Produto Id') ?></th>
                <th scope="col"><?= __('Quantidade') ?></th>
                <th scope="col" class="actions"><?= __('Actions') ?></th>
            </tr>
            <?php foreach ($pedido->pedido_item as $pedidoItem): ?>
            <tr>
                <td><?= h($pedidoItem->id) ?></td>
                <td><?= h($pedidoItem->pedido_id) ?></td>
                <td><?= h($pedidoItem->produto_id) ?></td>
                <td><?= h($pedidoItem->quantidade) ?></td>
                <td class="actions">
                    <?= $this->Html->link(__('View'), ['controller' => 'PedidoItem', 'action' => 'view', $pedidoItem->id]) ?>
                    <?= $this->Html->link(__('Edit'), ['controller' => 'PedidoItem', 'action' => 'edit', $pedidoItem->id]) ?>
                    <?= $this->Form->postLink(__('Delete'), ['controller' => 'PedidoItem', 'action' => 'delete', $pedidoItem->id], ['confirm' => __('Are you sure you want to delete # {0}?', $pedidoItem->id)]) ?>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php endif; ?>
    </div>
</div>
