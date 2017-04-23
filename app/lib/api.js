class Api {
  static headers() {
    return {
      'Content-Type': 'application/json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET')
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'https://map-chat-app2.herokuapp.com/api/v1/'
    const url = `${host}${route}`
    let body = JSON.stringify(params)
    let options = Object.assign({ method: verb }, params ? { body: body, headers: Api.headers() } : null );
    return fetch(url, options)
      .then((resp) => {
        return resp.json();
      })
      .then((respJSON) => {
        return respJSON;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
export default Api
