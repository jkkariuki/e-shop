import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function DropDown(props) {
  const [selected, setSelected] = useState("All");

  function handleChange(event) {
    setSelected(event.target.value);
  }

  function submitCategory(event) {
    props.onFilter(selected);
    event.preventDefault();
  }
  const categories = [
    "All",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  return (
    <div className="catSelector">
      <form>
        <label id="labels" htmlFor="categories">
          Shop By Category:&nbsp;
        </label>
        <select
          value={selected}
          onChange={handleChange}
          className="form-select"
          id="categories"
          name="categories"
        >
          {categories.map((category) => {
            return (
              <option value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            );
          })}
        </select>
        &nbsp;
        <button
          onClick={submitCategory}
          type="submit"
          class="btn btn-secondary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DropDown;
