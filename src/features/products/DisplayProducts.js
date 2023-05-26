import React from "react";
import { useSelector } from "react-redux";

const DisplayProducts = () => {
  const Products = useSelector((state) => state.data2);
  const displayProduct = Products[0]?.data;
  console.log(displayProduct);

  const RenderProduct = () => {
    return displayProduct?.map((product) => {
      return (
        <div key={product._id}>
          <div>{product.text}</div>
          <div>{product.created}</div>
          <div><img src={product.image} /></div>
          <br></br>
        </div>
      );
    });
  };

  return (
    <div>
      <RenderProduct />{" "}
    </div>
  );
};

export default DisplayProducts;
