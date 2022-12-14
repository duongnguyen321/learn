import config from "../../../Configs/Config.json";
import endpoint from "../../../Configs/Endpoint.json";

export default class HttpClient {
  constructor() {
    const endpointArr = Object.keys(endpoint);
    if (endpointArr.length) {
      endpointArr.forEach((item) => {
        this[item.toLowerCase()] = endpoint[item];
      });
    }
  }

  callApi = async (url, method, params = {}, body = null) => {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    url = `${config.SERVER_API}${url}`;

    if (Object.keys(params).length) {
      const searchParams = new URLSearchParams(params).toString();
      if (url.indexOf("?") !== -1) {
        url += `&${searchParams}`;
      } else {
        url += `?${searchParams}`;
      }
    }

    const response = await fetch(url, options);
    const data = await response.json();

    return {
      response: response,
      data: data,
    };
  };

  get = (url, params = {}) => {
    return this.callApi(url, "GET", params);
  };

  post = (url, body, params = {}) => {
    return this.callApi(url, "POST", params, body);
  };

  put = (url, body, params = {}) => {
    return this.callApi(url, "PUT", params, body);
  };

  patch = (url, body, params = {}) => {
    return this.callApi(url, "PATCH", params, body);
  };

  delete = (url, params = {}) => {
    return this.callApi(url, "DELETE", params);
  };
}
