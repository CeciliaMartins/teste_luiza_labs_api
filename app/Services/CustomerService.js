"use strict";

class CustomerService {
  static get inject() {
    return ["App/Repositories/CustomerRepository"];
  }

  constructor(customerRepository) {
    this.customerRepository = customerRepository;
  }

  /**
   * Store
   * @description Cadastra cliente
   * @param { Object } customer Dados a serem cadastrados.
   */
  async save(customer) {
    return await this.customerRepository.store(customer);
  }
}

module.exports = CustomerService;
