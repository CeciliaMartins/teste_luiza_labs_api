"use strict";

class BaseRepository {
  constructor(db) {
    this.db = db;
  }

  /**
   * store
   * @description Adiciona registro na tabela.
   * @param {Object} item Registro a ser salvo na tabela.
   */
  async store(item) {
    return await this.db.create(item);
  }

  /**
   * findByDynamic
   * @description Procura na base com possibilidade de filtragem e retorna somente um objeto.
   * @param { Array } columns Atributos que serão exibidos
   * @param { Object } query Parâmetro de filtragem da query
   */
  async findByDynamic(columns, query) {
    return await this.db.query().select(columns).where(query).first();
  }

  /**
   * update
   * @description Atualiza um registro.
   * @param { int } columns Atributos que serão atualizados
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

  /**
   * listAllWithModel
   * @description Busca na base e retona um array de objetos.
   * @param { Array } columns Atributos que serão exibidos
   * @param { Object } query Parâmetro de filtragem da query
   * @param { String } model Model que possui relacionamento com a tabela.
   */
  async listAllWithModel(columns, query, model) {
    return await this.db
      .query()
      .select(columns)
      .where(query)
      .with(model)
      .first();
  }

  /**
   * listAll
   * @description Busca na base e retona um array de objetos.
   * @param { Array } columns Atributos que serão exibidos
   */
  async listAll(columns) {
    return await this.db.query().select(columns).fetch();
  }
}
module.exports = BaseRepository;
