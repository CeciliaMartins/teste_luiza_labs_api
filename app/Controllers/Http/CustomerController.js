"use strict";
/**
 * @class CustomerController
 * @description Classe de Cliente.
 */
class CustomerController {
  static get inject() {
    return ["App/Services/CustomerService"];
  }
  constructor(customerService) {
    this.customerService = customerService;
  }

  /**
   * store
   * @description Cadastra um customer.
   */
  async store({ request, response }) {
    try {
      const data = request.only(["name", "email", "password"]);
      const customer = await this.customerService.save(data);
      return response.send({
        status: 200,
        data: customer,
        message: "OK",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update
   * @description Atualiza um determinado customer.
   */
  async update({ request, response, params }) {
    try {
      const data = request.only(["name", "email", "password"]);
      const customer = await this.customerService.update(params.id, data);
      return response.send({
        status: 200,
        data: customer,
        message: "OK",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * show
   * @description Exibe um determinado customer.
   */
  async show({ response, params }) {
    try {
      const customer = await this.customerService.showCustomer(params.id);
      return response.send({
        status: 200,
        data: customer,
        message: "OK",
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete
   * @description Exclui um determinado customer.
   */
  async delete({ response, params }) {
    try {
      const customer = await this.customerService.deleteCustomer(params.id);
      return response.send({
        status: 200,
        data: customer,
        message: "OK",
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CustomerController;
