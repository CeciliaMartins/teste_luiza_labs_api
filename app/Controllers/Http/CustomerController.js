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
  async update({ request, response, params }) {
    try {
      const data = request.only(["name", "email", "password"]);
      const customer = await this.customerService.update(params.id, data);
      return response.send({
        status: 200,
        data: customer,
        message: "Successfully updated",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async show({ response, params }) {
    try {
      const customer = await this.customerService.showCustomer(params.id);
      return response.send({
        status: 200,
        data: customer,
        message: "Successfully",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ response, params }) {
    try {
      const customer = await this.customerService.deleteCustomer(params.id);
      return response.send({
        status: 200,
        data: customer,
        message: "Successfully",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CustomerController;
