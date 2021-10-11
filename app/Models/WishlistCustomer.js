"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class WishlistCustomer extends Model {
  static boot() {
    super.boot();
  }
  customer() {
    return this.hasOne("App/Models/Customer", "customer_id", "id");
  }
  product() {
    return this.hasOne("App/Models/Product", "product_id", "id");
  }

 
}

module.exports = WishlistCustomer;
