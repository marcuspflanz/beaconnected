import rest from 'rest';

const restClient = rest;
const headers = {
  //'Content-Type': 'application/vnd.api+json',
  'Content-Type': 'application/json; charset=utf-8',
  //auth_token: 'FbPzyTdHU0JKo7Zv3jkXWqxV9gEtBfn5'
};
//const BASE_URL = 'https://app.xapix.io/api/v1/mateup/';
const PASSENGERS_URL = 'https://catasta.menkent.uberspace.de/couchdb/clubmatepassengers/_all_docs?include_docs=true';

export default class XapixService {
  static getUsers() {
    const requestConfig = {
      path: PASSENGERS_URL,
      headers
    };

    return restClient(requestConfig).then((response) => {
      const users = JSON.parse(response.entity);
      return users.rows.map((doc) => {return doc.doc;});
    }).catch((error) => {
    });
  }
}