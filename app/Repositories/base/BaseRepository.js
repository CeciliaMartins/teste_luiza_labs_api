"use strict";

class BaseRepository {
  constructor(db) {
    this.db = db;
  }

  /**
   *  Store
   * @description Adiciona registro nas tabelas.
   */
  async store(item) {
    return await this.db.create(item);
  }

  /**
   * FindByDynamic
   * @description Procura na base com possibilidade de filtragem e retorna somente um objeto.
   * @param { Array } columns
   * @param { Array } query
   */
  async findByDynamic(columns, query) {
    return await this.db.query().select(columns).where(query).first();
  }
}
module.exports = BaseRepository;
