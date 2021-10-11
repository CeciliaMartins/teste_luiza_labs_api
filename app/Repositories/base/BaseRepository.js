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
   * findByDynamic
   * @description Procura na base com possibilidade de filtragem e retorna somente um objeto.
   * @param { Array } columns
   * @param { Array } query
   */
  async findByDynamic(columns, query) {
    return await this.db.query().select(columns).where(query).first();
  }

  /**
   * update
   * @description Atualiza um registro.
   * @param { int } columns Atributos que serão ataluzados
   * @param { Object } id identificador
   */
  async update(id, columns) {
    const model = await this.db.find(id);
    model.merge(columns);
    await model.save();
    return model;
  }

  /**
   * findById
   * @description Retorna um registro pelo identificador(primary key).
   * @param { int } id identificador
   */
  async findById(id) {
    return await this.db.find(id);
  }

  /**
   * delete
   * @description Exclui um registro.
   * @param { int } id identificador
   */
  async delete(id) {
    const model = await this.db.findOrFail(id);
    await model.delete();
  }

  async listAllWithModel(props, query, model) {
    return await this.db.query().select(props).where(query).with(model).first();
  }
}
module.exports = BaseRepository;
