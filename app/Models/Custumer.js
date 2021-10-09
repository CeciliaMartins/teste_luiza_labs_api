"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class Custumer extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the custumer password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async (custumerInstance) => {
      if (custumerInstance.dirty.password) {
        custumerInstance.password = await Hash.make(custumerInstance.password);
      }
    });
  }
}

module.exports = Custumer;
