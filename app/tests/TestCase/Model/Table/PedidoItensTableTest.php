<?php
namespace App\Test\TestCase\Model\Table;

use App\Model\Table\PedidoItensTable;
use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;

/**
 * App\Model\Table\PedidoItensTable Test Case
 */
class PedidoItensTableTest extends TestCase
{
    /**
     * Test subject
     *
     * @var \App\Model\Table\PedidoItensTable
     */
    public $PedidoItens;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'app.PedidoItens',
        'app.Pedidos',
        'app.Produtos',
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::getTableLocator()->exists('PedidoItens') ? [] : ['className' => PedidoItensTable::class];
        $this->PedidoItens = TableRegistry::getTableLocator()->get('PedidoItens', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->PedidoItens);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test buildRules method
     *
     * @return void
     */
    public function testBuildRules()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
