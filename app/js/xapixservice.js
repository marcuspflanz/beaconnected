import rest from 'rest';

const restClient = rest;
const headers = {
  'Content-Type': 'application/vnd.api+json',
  auth_token: 'FbPzyTdHU0JKo7Zv3jkXWqxV9gEtBfn5'
};
const PASSENGERS_URL = 'https://app.xapix.io/api/v1/mateup/passengers';

export default class XapixService {
  static getUsers() {
    const requestConfig = {
      path: PASSENGERS_URL,
      headers
    };

    return restClient(requestConfig).then((response) => {
      debugger;
      const userData = JSON.parse(response.entity);
      const users = userData.data.map(({attributes}) => {
        return attributes;
      });
      return users;
    }).catch((error) => {
    });
  }
}