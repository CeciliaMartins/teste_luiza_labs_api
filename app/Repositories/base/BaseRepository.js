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

}
module.exports = BaseRepository;
