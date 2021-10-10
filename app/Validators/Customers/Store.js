"use strict";
const BaseValidator = require("../base/BaseValidator");

class Store extends BaseValidator { 
  get rules() {
    return {
      name: "required|max:80",
      email: "required|max:254|email|unique:customers,email",
      password: "required|max:60",
    };
  }

  get messages() {
    return {
      "name.required": "Campo nome é obrigatório.",
      "name.max": "Campo nome passou do limite máximo de 80 caracteres.",

      "email.required": "Campo email é obrigatório.",
      "email.max": "Campo email passou do limite máximo de 100 caracteres.",
      "email.unique": "Campo email já foi cadastrado",
      "email.email": "Campo email não possui o formato de email.",

      "password.required": "Campo senha é obrigatório.",
      "password.max": "Campo senha do limite máximo de 60 caracteres.",
    };
  }
}

module.exports = Store;
