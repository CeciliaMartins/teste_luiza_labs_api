"use strict";
/**
 * @class WishlistCustomerService
 */

class WishlistCustomerService {
  static get inject() {
    return ["App/Repositories/WishlistCustomerRepository"];
  }

  constructor(wishlistCustomerRepository) {
    this.wishlistCustomerRepository = wishlistCustomerRepository;
  }

  /**
   * isExistWishList
   * @description Verifica se o customer já adicionou o produto na lista de favoritos.
   * @param { int } customerId Identificador de customer.
   * @param { string } productListId Identificador de produto da api luizalabs.
   */
  async isExistWishList(customerId, productListId) {
    const wishlist =
      await this.wishlistCustomerRepository.getProductByIdCustomer(
        customerId,
        productListId
      );

    return wishlist != null ? true : false;
  }

  /**
   * remove
   * @description Exclui item dos favoritos.
   * @param { int } id Identificador de wishlistCustomer.
   */
  async remove(id) {
    await this.wishlistCustomerRepository.delete(id);
  }

  /**
   * listByCustomer
   * @description Lista de todos os produtos favoritos de um determinado customer.
   * @param { int } customerId Identificador de customer.
   */
  async listByCustomer(customerId) {
    const columns = [
      "products.title",
      "products.image",
      "products.price",
      "products.brand",
    ];
    return await this.wishlistCustomerRepository.getWishlistByCustumerId(
      customerId,
      columns
    );
  }
}

module.exports = WishlistCustomerService;
