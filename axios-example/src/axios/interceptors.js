import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
  // headers: {
  //   Accept: 'application/json',
  // },
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json';
    console.log('got the request');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    if (error.response.status) {
      console.log('error page not found');
    }
    return Promise.reject(error);
  }
);

export default authFetch;
