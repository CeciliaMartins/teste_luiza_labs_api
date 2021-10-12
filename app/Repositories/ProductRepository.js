const BaseRepository = require("./base/BaseRepository");

/**
 * @class ProductRepository
 */
class ProductRepository extends BaseRepository {
  static get inject() {
    return ["App/Models/Product"];
  }
  constructor(product) {
    super(product);
  }

  /**
   * findByProductListId
   * @description Procura produtos por productListId(id da api luizalabs).
   * @param { string } productListId  identificador do produto da api luizalabs.
   * @param { int } customerId Identificador do customer.
   */
  async findByProductListId(productListId, columns) {
    const query = {
      product_list_id: productListId,
    };
    return await this.findByDynamic(columns, query);
  }

  /**
   * listaAll
   * @description Lista todos os produtos cadastrados.
   */
  async listaAll(columns) {
    return await this.listAll(columns);
  }
}
module.exports = ProductRepository;
