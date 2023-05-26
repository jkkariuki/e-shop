import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { product, onAdd } = props;
  console.log(props.rating);
  function truncate(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  return (
    <div className="container">
      <section>
        <div className="card text-black">
          <Link className="link" to={"/products/" + props.id}>
            <img
              src={props.img}
              className="card-img-top cardImage"
              alt="Apple Computer"
            />
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">{truncate(props.title, 30)}</h5>
                <p className="text-muted mb-4 rating-text">
                  User Rating:
                  {props.rating}⭐
                </p>
              </div>
              <div>
                <div className="d-flex justify-content-end">
                  <h4>${props.price.toFixed(2)}</h4>
                </div>
              </div>
            </div>
          </Link>
          <Button className="cartButton" onClick={() => onAdd(props)}>
            Add to Cart
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
