"use strict";
const Route = use("Route");

Route.group("auth", () => {
  Route.post("auth/login", "AuthController.login");
}).prefix("api/");
