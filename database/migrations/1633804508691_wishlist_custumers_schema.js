"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WishlistCustumersSchema extends Schema {
  up() {
    this.create("wishlist_custumers", (table) => {
      table.increments();
      table
      .integer("customer_id")
      .unsigned()
      .references("id")
      .inTable("customers");
      table
      .integer("product_id")
      .unsigned()
      .references("id")
      .inTable("products");
      table.timestamps();
    });
  }

  down() {
    this.drop("wishlist_custumers");
  }
}

module.exports = WishlistCustumersSchema;
