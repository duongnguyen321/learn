import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function Products() {
  let apiUrl = `https://www.themealdb.com/api/json/v1/1`;
  let { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    callApi(id);
  }, []);
  const callApi = (id) => {
    fetch(`${apiUrl}/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products.meals);
        console.log(products.meals);
      });
  };

  return (
    <>
      <h6>
        <Link to={"/"}>Tìm lại</Link>
      </h6>
      {products.map((product) => {
        console.log(product);
        return (
          <div className="product container py-5" key={product.idMeal}>
            <div className="row justify-content-center">
              <h1>{product.strMeal}</h1>
              <img
                src={product.strMealThumb}
                alt={product.strMeal}
                style={{ width: "300px", height: "300px" }}
              />
              <h2>Đến từ: {product.strArea}</h2>
              <h3>Nguyên liệu :</h3>
              <ul>
                <li>{product.strIngredient1}</li>
                <li>{product.strIngredient2}</li>
                <li>{product.strIngredient3}</li>
                <li>{product.strIngredient4}</li>
                <li>{product.strIngredient5}</li>
                <li>{product.strIngredient6}</li>
                <li>và một vài nguyên liệu khác...</li>
              </ul>
              <h4>Hướng dẫn:</h4>
              <p>{product.strInstructions}</p>
              <span>
                Xem thêm hướng dẫn tại{" "}
                <a href={product.strYoutube} target="_blank" rel="noreferrer">
                  Youtube
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
