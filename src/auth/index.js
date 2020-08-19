import { API } from "../config";

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("signup err", err);
    });
};

export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("signin err", err);
    });
};

export const authenticate = (data, next) => {
  if (typeof window != "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window != "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("Signout", response);
      })
      .catch((err) => {
        console.log("signout err", err);
      });
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false
  }
  if (localStorage.getItem('jwt')) {
    //Verificar na API se ele o token é valido
    return JSON.parse(localStorage.getItem('jwt'))
  } else {
    return false
  }
}
