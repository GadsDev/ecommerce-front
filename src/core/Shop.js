import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [filtersResults, setFiltersResults] = useState(0);

  // Load
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError({ ...data, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const loadFilteredResults = (newFilters) => {
    getFilteredProducts(skip, limit, newFilters).then((data) => {
      if (data.error) {
        setError(data.error)
      } else {
        setFiltersResults(data)
      }
    })
  }

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters)
  }, []);

  /**
   *
   * @param {*} filters Values of Filter
   * @param {*} filterBy Category or Price
   */
  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy == "price") {
      let priceValues = handlePrice(filters)  
      
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters)
    setMyFilters(newFilters);
  };
  
  const handlePrice = value => {
    const data = prices
    let array = []
    data.forEach(element => {      
      if (element._id === parseInt(value)) {
        array = element.array
      }
    });
    return array
  }

  return (
    <Layout
      title="Home Page"
      description="Search and find books of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
          <h4>Filter by categories</h4>
          <ul>
            <Checkbox
              categories={categories}
              handleFilters={(filters) => handleFilters(filters, "category")}
            />
          </ul>

          <h4>Filter by price range</h4>
          <div>
            <RadioBox
              prices={prices}
              handleFilters={(filters) => handleFilters(filters, "price")}
            />
          </div>
        </div>
        <div className="col-8">{JSON.stringify(filtersResults)}</div>
      </div>
    </Layout>
  );
};

export default Shop;
