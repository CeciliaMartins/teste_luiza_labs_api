"use strict";
const BaseValidator = require("../base/BaseValidator");

class Update extends BaseValidator {
  get rules() {
    const { id } = this.ctx.params;
    return {
      name: "max:80",
      email: `max:254|email|unique:customers,email,id,${id}`,
      password: "max:60",
    };
  }

  get messages() {
    return {
      "name.max": "Campo nome passou do limite máximo de 80 caracteres.",

      "email.max": "Campo email passou do limite máximo de 100 caracteres.",
      "email.unique": "Campo email já foi cadastrado",
      "email.email": "Campo email não possui o formato de email.",

      "password.max": "Campo senha do limite máximo de 60 caracteres.",
    };
  }
}

module.exports = Update;
