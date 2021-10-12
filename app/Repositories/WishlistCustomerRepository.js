const BaseRepository = require("./base/BaseRepository");
/**
 * @class WishlistCustomerRepository
 */
class WishlistCustomerRepository extends BaseRepository {
  static get inject() {
    return ["App/Models/WishlistCustomer"];
  }
  constructor(wishlistCustomer) {
    super(wishlistCustomer);
    this.model = wishlistCustomer;
  }

  /**
   * getProductByIdCustomer
   * @description Exibe produto de um determiando customer.
   * @param { int } customerId Identificador do customer.
   * @param { int } productId  identificador da produto.
   */
  async getProductByIdCustomer(customerId, productId) {
    return await this.model
      .query()
      .select("wishlist_customers.customer_id")
      .leftJoin("products", "wishlist_customers.product_id", "products.id")
      .where("products.product_list_id", "=", productId)
      .andWhere("wishlist_customers.customer_id", "=", customerId)
      .first();
  }

  /**
   * getWishlistByCustumerId
   * @description Lista produtos favoritos de um determiando customer.
   * @param { int } customerId Identificador do customer.
   * @param { Array } columns  Atributos que serão exibidos.
   */
  async getWishlistByCustumerId(customerId, columns) {
    return await this.model
      .query()
      .select(columns)
      .leftJoin("products", "wishlist_customers.product_id", "products.id")
      .where("wishlist_customers.customer_id", "=", customerId)
      .fetch();
  }
}
module.exports = WishlistCustomerRepository;
