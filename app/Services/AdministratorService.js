"use strict";
/**
 * @class AdministratorService
 */
class AdministratorService {
  static get inject() {
    return ["App/Repositories/AdministratorRepository"];
  }

  constructor(administratorRepository) {
    this.administratorRepository = administratorRepository;
  }

  /**
   * findAdministratorByEmail
   * @description Busca Administrator
   * @param {Object} email Parametro a ser buscado.
   */
  async findAdministratorByEmail(email) {
    const query = {
      email: email,
    };
    const columns = ["id", "name"];
    return await this.administratorRepository.findByDynamic(columns, query);
  }
}

module.exports = AdministratorService;