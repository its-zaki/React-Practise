import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Product = () => {
    const params = useParams()
    console.log(params);
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products").then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })

    })

  return (
    <>
    <div>Product{params.id}</div>
    </>

  )
}

export default Product