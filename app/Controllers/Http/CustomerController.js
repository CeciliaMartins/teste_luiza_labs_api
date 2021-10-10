"use strict";
/**
 * @class CustomerController
 */
class CustomerController {
  static get inject() {
    return ["App/Services/CustomerService"];
  }
  constructor(customerService) {
    this.customerService = customerService;
  }

  async store({ request, response }) {
    try {
      const data = request.only(["name", "email", "password"]);
      const customer = await this.customerService.save(data);
      return response.send({
        status: 200,
        data: customer,
        message: "Successfully registered",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CustomerController;
