const BaseRepository = require("./base/BaseRepository");
/**
 * @class CustomerRepository
 */
class CustomerRepository extends BaseRepository {
  static get inject() {
    return ["App/Models/Customer"];
  }
  constructor(customer) {
    super(customer);
    this.model = customer;
  }

  /**
   * listAllWithProducts
   * @description Lista todos os customers com seus produtos favoritos
   */
  async listAllWithProducts() {
    const customers = await this.model
      .query()
      .select("id", "name", "created_at")
      .with("wishlistCustomers", (builder) => {
        builder.with("products", (builder) => {
          builder.select(
            "products.id",
            "products.title",
            "products.image",
            "products.brand",
            "products.price"
          );
        });
      })
      .fetch();

    return customers;
  }
}
module.exports = CustomerRepository;
