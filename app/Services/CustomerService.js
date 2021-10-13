"use strict";
/**
 * @class CustomerService
 */
class CustomerService {
  static get inject() {
    return ["App/Repositories/CustomerRepository"];
  }

  constructor(customerRepository) {
    this.customerRepository = customerRepository;
  }

  /**
   * save
   * @description Cadastra customer
   * @param { Object } customer Dados a serem cadastrados.
   */
  async save(customer) {
    return await this.customerRepository.store(customer);
  }

  /**
   * findCustomerByEmail
   * @description Busca customer
   * @param {Object} email Parametro a ser buscado.
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
   * @description Altera atributos da tabela Customer.
   * @param {int} id Identificador do customer.
   * @param {Object} customer  Atributos a serem atualizados.
   */
  async update(id, customer) {
    return await this.customerRepository.update(id, customer);
  }

  /**
   * showCustomer
   * @description Exibe dados de um determinado Customer.
   * @param {int} id Identificador do customer.
   */
  async showCustomer(id) {
    return await this.customerRepository.findById(id);
  }

  /**
   * deleteCustomer
   * @description Exclui um determinado Customer
   * @param {int} id Identificador do customer.
   */
  async deleteCustomer(id) {
    return await this.customerRepository.delete(id);
  }

  /**
   * listAll
   * @description Lista todos os customers
   */
  async listAll() {
    const columns = ["id", "name", "email", "created_at"];
    return await this.customerRepository.listAll(columns);
  }

  /**
   * listAll
   * @description Lista todos os customers
   */
  async listAllWithProducts() {
    const customers = await this.customerRepository.listAllWithProducts();

    const newCustomers = [];

    customers.toJSON().map((cust) => {
      const costumer = {
        id: cust.id,
        name: cust.name,
        created_at: cust.created_at,
        products: [],
      };
      const { wishlistCustomers } = cust;

      wishlistCustomers.map((wish) => {
        const product = wish.products;
        costumer.products.push({ ...product });
      });

      newCustomers.push({ costumer });
    });

    return newCustomers;
  }
}

module.exports = CustomerService;
