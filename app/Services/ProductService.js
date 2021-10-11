"use strict";

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
   * Store
   * @description Cadastra produto e adiciona referência com a tabela wishlist_customer
   * @param { Object } data Dados a serem cadastrados.
   * @param { Object } customerId Identificador do customer.
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
}

module.exports = ProductService;
