import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../../components/SingleCard";
import axios from 'axios'

const SingleProduct = () => {
  const param = useParams();
  // usestate 
  const [data, setData] = useState(null)
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${param.id}`).then((res)=>{
      console.log(res);
      setData(res.data)
    }).catch((err)=>{
      console.log(err);
    })

  },[])

  return (
    <>
      {data !== null ? <SingleCard src={data.image} title={data.title} description={data.description} price={data.price} id={data.id}/>
      : <h1>Loading...</h1>}
    </>
  );
};

export default SingleProduct;
