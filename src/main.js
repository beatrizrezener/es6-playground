import axios from 'axios';

class API {
  static async getUserInfo(username) {
    try {
      const response = await(axios.get(`https://api.github.com/users/${username}`));
      console.log(response);
    } catch (err) {
      console.warn(`Fail to request user:\n${err}`);
    }
  }
}

API.getUserInfo('beatrizrezener');
API.getUserInfo('232ewdfsd');