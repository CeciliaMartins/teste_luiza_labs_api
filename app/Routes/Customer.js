"use strict";
const Route = use("Route");

Route.group("customer", () => {
  Route.post("/", "CustomerController.store");
}).prefix("customer");
