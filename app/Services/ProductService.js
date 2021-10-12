"use strict";

/**
 * @class ProductService
 */
class ProductService {
  static get inject() {
    return [
      "App/Repositories/ProductRepository",
      "App/Repositories/WishlistCustomerRepository",
    ];
  }

  constructor(productRepository, wishlistCustomerRepository) {
    this.productRepository = productRepository;
    this.wishlistCustomerRepository = wishlistCustomerRepository;
  }
  /**
   * save
   * @description Cadastra produto e adiciona referência com a tabela wishlist_customer
   * @param { Object } data Dados a serem cadastrados.
   * @param { int } customerId Identificador do customer.
   */
  async save(data, customerId) {
    const product = {
      title: data.title,
      price: data.price,
      image: data.image,
      brand: data.brand,
      reviewScore: data.reviewScore,
      product_list_id: data.id,
    };

    const columns = ["id"];
    const isExistProduct = await this.productRepository.findByProductListId(
      product.product_list_id,
      columns
    );
    let productId;
    if (isExistProduct == null) {
      const { id } = await this.productRepository.store(product);
      productId = id;
    } else {
      productId = isExistProduct.id;
    }
    const wishlistCostumer = {
      product_id: productId,
      customer_id: customerId,
    };
    const wishlist = await this.wishlistCustomerRepository.store(
      wishlistCostumer
    );
    return wishlist.id;
  }

  /**
   * getWishlistProducts
   * @description Lista todos os produtos cadastrados.
   */
  async getWishlistProducts() {
    const columns = [
      "id",
      "title",
      "brand",
      "price",
      "image",
      "product_list_id",
    ];
    return await this.productRepository.listaAll(columns);
  }
}

module.exports = ProductService;
