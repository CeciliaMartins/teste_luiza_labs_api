"use strict";
const Route = use("Route");

Route.group("auth", () => {
  Route.post("auth/login", "AuthController.login");
  Route.post("admin/login", "AuthController.loginAdmin");
}).prefix("api/");
