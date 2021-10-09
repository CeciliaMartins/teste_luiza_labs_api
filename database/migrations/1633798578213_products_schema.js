'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments();
      table.string('title', 80).notNullable();
      table.decimal('price').notNullable();
      table.string('brand', 80).notNullable();
      table.float('reviewScore',8,6).nullable();
      table.uuid('product_list_id').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
