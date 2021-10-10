"use strict";

class AuthController {
  static get inject() {
    return ["App/Services/CustomerService"];
  }
  constructor(customerService) {
    this.customerService = customerService;
  }

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
          message: "Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      return response.send({
        status: 401,
        data: "",
        message: "You are not registered!",
      });
    }
  }
}

module.exports = AuthController;
