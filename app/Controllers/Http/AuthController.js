"use strict";
/**
 * @description Classe de Autenticação.
 * @class AuthController
 */
class AuthController {
  static get inject() {
    return [
      "App/Services/CustomerService",
      "App/Services/AdministratorService",
    ];
  }
  constructor(customerService, administratorService) {
    this.customerService = customerService;
    this.administratorService = administratorService;
  }

  /**
   * login
   * @description Autenticação de usuário customer e retorna token para acessar os endpoints.
   */
  async login({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      const data = await auth.authenticator("jwt").attempt(email, password);
      if (data) {
        const customer = await this.customerService.findCustomerByEmail(email);
        if (customer) {
          data.customer = customer;
        }
        response.send({
          status: 200,
          data: data,
          message: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      return response.send({
        status: 401,
        data: "",
        message: "Você não é cadastrado!",
      });
    }
  }

  /**
   * loginAdmin
   * @description Autenticação de usuário administrator e retorna token para acessar os endpoints.
   */
  async loginAdmin({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      const data = await auth.authenticator("admin").attempt(email, password);
      if (data) {
        const administrator =
          await this.administratorService.findAdministratorByEmail(email);
        if (administrator) {
          data.administrator = administrator;
        }
        response.send({
          status: 200,
          data: data,
          message: "OK",
        });
      }
    } catch (error) {
      console.log(error);
      return response.send({
        status: 401,
        data: "",
        message: "Você não é cadastrado!",
      });
    }
  }
}

module.exports = AuthController;
