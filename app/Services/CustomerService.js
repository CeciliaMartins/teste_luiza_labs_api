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

  /**
   * update
   * @description Altera atributos da tabela Customer
   * @param {int} id Identificador do customer.
   * @param {Object} customer  Atributos a serem atualizados.
   */
  async update(id, customer) {
    return await this.customerRepository.update(id, customer);
  }

  /**
   * showCustomer
   * @description Exibe dados de um determinado Customer
   * @param {int} id Identificador do customer.
   */
  async showCustomer(id) {
    return await this.customerRepository.findById(id);
  }

  /**
   * showCustomer
   * @description Exclui um determinado Customer
   * @param {int} id Identificador do customer.
   */
  async deleteCustomer(id) {
    return await this.customerRepository.delete(id);
  }
}

module.exports = CustomerService;
