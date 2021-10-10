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

  /**
   * findCustomerByEmail
   * @description Busca cliente
   * @param {Array} email Parametro a ser buscado.
   */
  async findCustomerByEmail(email) {
    const query = {
      email: email,
    };
    const columns = ["id", "name"];
    return await this.customerRepository.findByDynamic(columns, query);
  }
}

module.exports = CustomerService;
