"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");
const Database = use("Database");

class AdministratorsSchema extends Schema {
  up() {
    this.create("administrators", (table) => {
      table.increments();
      table.string("name", 80).notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("administrators");
  }
}

module.exports = AdministratorsSchema;
