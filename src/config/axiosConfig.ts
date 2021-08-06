import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 250000,
});

instance.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`
};

export const APIService = {
  get(endpoint:string) {
    return instance.get(endpoint);
  },

  post(endpoint:string, data: any) {
    return instance.post(endpoint, data);
  },

  delete(endpoint:string) {
    return instance.delete(endpoint);
  },

  put(endpoint:string, data:any) {
    return instance.put(endpoint, data);
  },
};


