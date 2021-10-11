"use strict";
const BaseValidator = require("../base/BaseValidator");

class WishlistStore extends BaseValidator {
  get rules() {
    return {
      productListId: "required",
      costumerId: "required|integer",
    };
  }

  get messages() {
    return {
      "productListId.required": "Atributo productListId é obrigatório.",
        
      "costumerId.required": "Atributo costumerId é obrigatório.",
      "costumerId.integer": "Atributo costumerId não é um número inteiro",
    };
  }
}
module.exports = WishlistStore;
