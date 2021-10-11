'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsAddImageSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table.string('image',200).nullable()
    })
  }

  down () {
    this.table('products', (table) => {
      table.dropColumn('image')
    })
  }
}

module.exports = ProductsAddImageSchema
