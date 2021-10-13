"use strict";
const Route = use("Route");

Route.group("product", () => {
  Route.get("external/detail/:id", "ProductController.findProductApiExternal");
  Route.post("/", "ProductController.addWishListProduct")
    .validator("Products/WishlistStore")
    .middleware(["auth:jwt"]);

  Route.get("wishlist", "ProductController.getWishlistProducts").middleware([
    "auth:admin",
  ]);
}).prefix("product");
