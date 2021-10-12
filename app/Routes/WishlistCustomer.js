"use strict";
const Route = use("Route");

Route.group("wishlistCostumer", () => {
  Route.delete("/:id", "WishlistCustomerController.remove").middleware([
    "auth:jwt",
  ]);

  Route.get(
    "customer/:customerId",
    "WishlistCustomerController.listAllProductsByCustomer"
  ).middleware(["auth:jwt"]);
}).prefix("wishlistCostumer");
