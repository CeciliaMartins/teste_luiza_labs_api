"use strict";

class WishlistCustomerService {
  static get inject() {
    return ["App/Repositories/WishlistCustomerRepository"];
  }

  constructor(wishlistCustomerRepository) {
    this.wishlistCustomerRepository = wishlistCustomerRepository;
  }
  async isExistWishList(customerId, productListId) {
    const wishlist =
      await this.wishlistCustomerRepository.listProductsByIdCustomer(
        customerId,
        productListId
      );

    return wishlist != null ? true : false;
  }
}

module.exports = WishlistCustomerService;
