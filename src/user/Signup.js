import React, { useState } from "react";
import Layout from "../core/Layout";
import { API } from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    sucess: false,
  });
  const { name, email, password, error, sucess } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const signup = (user) => {
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
      .catch((err) => {});
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, sucess: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          sucess: true,
        });
      }
    });
  };
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-mute">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-mute">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-mute">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: sucess ? "" : "none" }}
    >
      New account is created. Plase signin
    </div>
  );

  return (
    <Layout
      title="Signup"
      description="Node React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
