"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class Administrator extends Model {
  static get hidden() {
    return ["password"];
  }
  static boot() {
    super.boot();

    /**
     * A hook to hash the administrator password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async (administratorInstance) => {
      if (administratorInstance.dirty.password) {
        administratorInstance.password = await Hash.make(
          administratorInstance.password
        );
      }
    });
  }
}

module.exports = Administrator;
