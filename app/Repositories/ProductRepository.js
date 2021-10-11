const BaseRepository = require("./base/BaseRepository");

class ProductRepository extends BaseRepository {
  static get inject() {
    return ["App/Models/Product"];
  }
  constructor(product) {
    super(product);
  }
  async findByProductListId(productListId, columns) {
    const query = {
      product_list_id: productListId,
    };
    return await this.findByDynamic(columns, query);
  }
}
module.exports = ProductRepository;
