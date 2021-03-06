"use strict";
const Route = use("Route");

Route.group("customer", () => {
  Route.post("/", "CustomerController.store").validator(["Customers/Store"]);

  Route.put("/:id", "CustomerController.update")
    .validator(["Customers/Update"])
    .middleware(["auth:jwt"]);
  Route.get("/:id", "CustomerController.show").middleware(["auth:jwt"]);
  Route.delete("/:id", "CustomerController.delete").middleware(["auth:jwt"]);

  Route.get("/", "CustomerController.index").middleware(["auth:admin"]);
  Route.get("/wishlist/products", "CustomerController.listAllWithProducts").middleware([
    "auth:admin",
  ]);
}).prefix("customer");
