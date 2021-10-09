"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class WishlistCustumer extends Model {
  static boot() {
    super.boot();
  }
  custumer() {
    return this.hasOne("App/Models/Custumer", "custumer_id", "id");
  }
  product() {
    return this.hasOne("App/Models/Product", "product_id", "id");
  }
}

module.exports = WishlistCustumer;
