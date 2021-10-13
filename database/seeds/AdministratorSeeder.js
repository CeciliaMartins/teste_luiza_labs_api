"use strict";

/*
|--------------------------------------------------------------------------
| AdministratorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const AdministratorModel = use("App/Models/Administrator");

class AdministratorSeeder {
  async run() {
    await AdministratorModel.create({
      name: "Luiza",
      email: "admin@mail.com",
      password: "admin",
    });
  }
}

module.exports = AdministratorSeeder;
