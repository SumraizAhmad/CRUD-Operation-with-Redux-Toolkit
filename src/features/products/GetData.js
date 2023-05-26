import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../products/productSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetData = () => {
  //   const [dataDetail, setDataDetail] = useState();
  const dispatch = useDispatch();

  const onHandleClick=()=>{
    // useEffect(() => {
      const dataList = async () => {
        const myData = await axios.get(
          `https://www.out-class.org/api/cms/olevel_course`
        );
        const userss = myData.data;
        //   console.log(userss);
        dispatch(addData(userss));
        toast("Data has been save in store");
      };
      dataList();
    // }, []);
  }

  const productDetail = useSelector((state) => state.data2);
  // console.log(productDetail);

  return (
    <div>
      <button onClick={onHandleClick}>GetData</button>
      <br></br>
      <ToastContainer />
      <Link to={`/displayProduct`}>Show Data</Link>
    </div>
  );
};

export default GetData;
