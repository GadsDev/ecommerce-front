import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin.js";

const AddProduct = () => {
  // destructor user and token from localStorage
  const { user, token } = isAuthenticated();
  
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    photo: '',
    loading: false,
    error: '',
    createProduct: '',
    redirectToProfile: false,
    formData: ''
  })

  const {
    name,
    description,
    price,
    categories,
    quantity,
    category,
    shipping,
    photo,
    loading,
    error,
    createProduct,
    redirectToProfile,
    formData
  } = values

  useEffect(() => {
    setValues({...values, formData: new FormData()})
  }, [

  ])

  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value
    formData.set(name, value)
    setValues({ ...values, [name]: value })
  }

  const clickSubmit = (event) => {
    console.log("event");
  }

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn btn-secondary">
          <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*"/>
        </label>
      </div>
      <div className="form-group">
        <label className="text-mute">Name</label>
        <input onChange={handleChange('name')} type="text" className="form-control" value={name}/>
      </div>

      <div className="form-group">
        <label className="text-mute">Description</label>
        <input onChange={handleChange('description')} type="text" className="form-control" value={description}/>
      </div>

      <div className="form-group">
        <label className="text-mute">Price</label>
        <input onChange={handleChange('price')} type="number" className="form-control" value={price}/>
      </div>

      <div className="form-group">
        <label className="text-mute">Category</label>
        <select onChange={handleChange('price')} className="form-control">
          <option value="5f394a7492123e29f69b5d42">Node</option>
        </select>
      </div>

      <div className="form-group">
        <label className="text-mute">Shipping</label>
        <select onChange={handleChange('price')} className="form-control">
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label className="text-mute">Quantity</label>
        <input
          onChange={handleChange('quantity')}
          type="number"
          className="form-control"
          value={quantity}
        />
      </div>

      <button className="btn btn-outline-primary">Create Product</button>
    </form>
  )

  return (
    <Layout
      title="Add new product"
      description={`Good Day ${user.name}, ready to add a new product ?`}
    >
      <div className="row container">
        <div className="col-md-8 offset-md-2">         
          {newPostForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct;
