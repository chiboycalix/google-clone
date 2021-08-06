import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 250000,
});

const suggesstInstance = axios.create({
  baseURL: process.env.REACT_APP_SUGGEST_URL,
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
  }
};

export const SuggestAPIService = {
  get(endpoint:string) {
    return suggesstInstance.get(endpoint);
  }
};

