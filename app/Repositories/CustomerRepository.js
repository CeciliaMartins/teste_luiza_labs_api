const BaseRepository = require("./base/BaseRepository");

class CustomerRepository extends BaseRepository {
  static get inject() {
    return ["App/Models/Customer"];
  }
  constructor(customer) {
    super(customer);
  }
  
}
module.exports = CustomerRepository;
