"use strict";
const Env = use("Env");
/**
 * @class ProductController.
 * @description Classe de Produto.

 */
class ProductController {
  static get inject() {
    return [
      "App/Services/ProductService",
      "App/Services/ApiExternalService",
      "App/Services/WishlistCustomerService",
    ];
  }
  constructor(productService, apiExternalService, wishlistCustomerService) {
    this.productService = productService;
    this.apiExternalService = apiExternalService;
    this.wishlistCustomerService = wishlistCustomerService;
  }

  /**
   * findProductApiExternal
   * @description Acessa a api de produtos da luizalabs.
   */
  async findProductApiExternal({ response, params }) {
    try {
      const domain = Env.get("CHALLENGE_API");
      const url = `${domain}/product/${params.id}/`;
      const product = await this.apiExternalService.findProductDetail(url);

      response.send({
        status: product.status,
        data: product.data,
        message: product.message,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  /**
   * addWishListProduct
   * @description Adiciona produtos favoritos.
   */
  async addWishListProduct({ request, response }) {
    try {
      const body = request.only(["productListId", "costumerId"]);
      const isExistItemWishList =
        await this.wishlistCustomerService.isExistWishList(
          body.costumerId,
          body.productListId
        );

      if (isExistItemWishList == true) {
        response.send({
          status: 200,
          data: null,
          message: "Você já adicionou esse produto!",
        });
      } else {
        const infoProduct = await this.getProductDetailApiExternal(
          body.productListId
        );

        if (infoProduct.data != null) {
          const created = await this.productService.save(
            infoProduct.data,
            body.costumerId
          );
          response.send({
            status: 200,
            data: created,
            message: "OK",
          });
        } else {
          response.send({
            status: infoProduct.status,
            data: infoProduct.data,
            message: infoProduct.message,
          });
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  /**
   * getProductDetailApiExternal
   * @description Retorna a url da luizalabs com o detalhe de um determinado produto.
   * @param {string} productListId Identificador do produto (api luizalabs)
   */
  async getProductDetailApiExternal(productListId) {
    const domain = Env.get("CHALLENGE_API");
    const url = `${domain}/product/${productListId}/`;
    return await this.apiExternalService.findProductDetail(url);
  }

  /**
   * getProductDetailApiExternal
   * @description Lista todos os produtos já cadastrados como fevoritos.
   */
  async getWishlistProducts({ response }) {
    const products = await this.productService.getWishlistProducts();
    response.send({
      status: 200,
      data: products,
      message: "OK",
    });
  }
}

module.exports = ProductController;
