"use strict";
const Env = use("Env");

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
            message: "Successfully registered",
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
  async getProductDetailApiExternal(productListId) {
    const domain = Env.get("CHALLENGE_API");
    const url = `${domain}/product/${productListId}/`;
    return await this.apiExternalService.findProductDetail(url);
  }
}

module.exports = ProductController;
