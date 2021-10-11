const axios = require("axios");

class ApiExternalService {
  async findProductDetail(url) {
    try {
      const res = await axios.get(url);
      return { data: res.data, status: res.status, message: res.statusText };
    } catch (error) {
      return {
        data: null,
        status: error.response.status,
        message: error.response.data.error_message,
      };
    }
  }
}
module.exports = ApiExternalService;
