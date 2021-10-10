"use strict";

class BaseValidator {
  constructor(validator) {
    this.validator = validator;
  }
  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
}

module.exports = BaseValidator;
