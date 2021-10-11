const BaseRepository = require("./base/BaseRepository");

class WishlistCustomerRepository extends BaseRepository {
  static get inject() {
    return ["App/Models/WishlistCustomer"];
  }
  constructor(wishlistCustomer) {
    super(wishlistCustomer);
    this.model = wishlistCustomer;
  }

  async listProductsByIdCustomer(customerId, productId) {
    return await this.model
      .query()
      .select("wishlist_customers.customer_id")
      .leftJoin("products", "wishlist_customers.product_id", "products.id")
      .where("products.product_list_id", "=", productId)
      .andWhere("wishlist_customers.customer_id", "=", customerId)
      .first();
  }
}
module.exports = WishlistCustomerRepository;
