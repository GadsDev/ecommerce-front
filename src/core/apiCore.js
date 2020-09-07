import { API } from '../config'
import queryString from 'query-string'
export const getProducts = (sortBy) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
      method: "GET"  
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log("getProducts err", err);
      });
};

export const getCategories = () => {
  return fetch(`${API}/category`, {
    method: "GET"  
  })
    .then((response) =>
    {     
      console.log("RESPONSE", response);
      return response.json();
    })
    .catch((err) => {
      console.log("getCategories err", err);
    });
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit, skip, filters
  }
  return fetch(`${API}/products/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .catch((err) => {
      console.log("createCategory err", err);
    });
};

export const list = params => {
  const query = queryString.stringify(params)
  console.log('query', query);
  return fetch(`${API}/products/search?${query}`, {
    method: "GET"  
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("getProducts err", err);
    });
};