"use client";

import React, { useState, useEffect } from "react";
import ProductService from "../ProductService";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((res) => {
      console.log(111, res);
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <h2 className="text-center"> Product List </h2>
      <div className="row">
        <button className="btn btn-primary"> Add Product </button>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Product Name </th>
                <th> Product Description </th>
                <th> Product Price </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name} </td>
                  <td> {product.description} </td>
                  <td> {product.price} </td>
                  <td>
                    <button className="btn btn-info"> Update </button>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        ProductService.deleteProduct(product.id).then(() =>
                          setProducts(
                            products.filter((p) => p.id !== product.id)
                          )
                        )
                      }
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Page;
