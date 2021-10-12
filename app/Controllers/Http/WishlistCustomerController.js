"use strict";
/**
 * @class WishlistCustomerController
 * @description Classe de Produtos favoritos do Cliente.
 */
class WishlistCustomerController {
  static get inject() {
    return ["App/Services/WishlistCustomerService"];
  }
  constructor(wishlistCustomerService) {
    this.wishlistCustomerService = wishlistCustomerService;
  }
  
  /**
   * remove
   * @description Exclui um determinado item dos favoritos.
   */
  async remove({ response, params }) {
    try {
      await this.wishlistCustomerService.remove(params.id);
      response.send({
        status: 200,
        data: null,
        message: "OK",
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  /**
   * listAllProductsByCustomer
   * @description Lista todos os produtos favoritos de um determinado custumer.
   */
  async listAllProductsByCustomer({ response, params }) {
    try {
      const products = await this.wishlistCustomerService.listByCustomer(
        params.customerId
      );
      response.send({
        status: 200,
        data: products,
        message: "OK",
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
module.exports = WishlistCustomerController;
