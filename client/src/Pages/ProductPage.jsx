import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getProductById } from "../APICalls";

function ProductPage(props) {
  const productId = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [altPhotos, setAltPhotos] = useState([]);
  const { onAdd } = props;
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    getProductById(productId.id).then((res) => {
      setSingleProduct(res.data);
      setMainImage(res.data.thumbnail);
      setAltPhotos(res.data.images);
    });
  }, []);

  function changeImage(e) {
    setMainImage(e.target.src);
  }

  function defaultImg() {
    setMainImage(singleProduct.thumbnail);
  }

  console.log(altPhotos);

  return (
    <div className="container productPageContainer">
      {console.log(altPhotos)}

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 singleProductImgDiv">
          <img
            className="card-img-top mb-5 mb-md-0 singleProductImg"
            src={mainImage}
          ></img>
          <div className="row">
            {altPhotos.map((img) => {
              return (
                <img
                  onMouseOver={changeImage}
                  onMouseOut={defaultImg}
                  className="col smProdImg"
                  src={img}
                ></img>
              );
            })}
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="small mb-1">SKU:{productId.id}</div>
          <h1 className="display-5 fw-bolder">{singleProduct.title}</h1>
          <div className="fs-5 mb-1">
            $<span>{singleProduct.price}</span>
          </div>
          <div className="fs-5 mb-5">
            <span>Rating: {singleProduct.rating}⭐</span>
          </div>
          <p className="lead">{singleProduct.description}</p>
          <div className="d-flex">
            <input
              className="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              value="1"
              style={{ maxWidth: "3rem" }}
            />
            <button
              className="btn btn-outline-dark flex-shrink-0"
              onClick={() => onAdd(singleProduct)}
              type="button"
            >
              <i className="bi-cart-fill me-1"></i>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
