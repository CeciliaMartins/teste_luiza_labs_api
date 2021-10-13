const BaseRepository = require("./base/BaseRepository");
/**
 * @class AdministratorRepository
 */
class AdministratorRepository extends BaseRepository {
  static get inject() {
    return ["App/Models/Administrator"];
  }
  constructor(administrator) {
    super(administrator);
  }
}
module.exports = AdministratorRepository;
