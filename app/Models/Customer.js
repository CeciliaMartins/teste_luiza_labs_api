"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class Customer extends Model {
  static get hidden() {
    return ["password"];
  }
  static boot() {
    super.boot();

    /**
     * A hook to hash the customer password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async (customerInstance) => {
      if (customerInstance.dirty.password) {
        customerInstance.password = await Hash.make(customerInstance.password);
      }
    });
  }
  wishlistCustomers() {
    return this.hasMany("App/Models/WishlistCustomer", "id", "customer_id");
  }
}

module.exports = Customer;
