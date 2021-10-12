"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WishlistCustomersSchema extends Schema {
  up() {
    this.create("wishlist_customers", (table) => {
      table.increments();
      table.integer("customer_id").unsigned();
      table
        .foreign("customer_id")
        .references("id")
        .inTable("customers")
        .onDelete("CASCADE");
      table.integer("product_id").unsigned();
      table
        .foreign("product_id")
        .references("id")
        .inTable("products")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("wishlist_customers");
  }
}

module.exports = WishlistCustomersSchema;
