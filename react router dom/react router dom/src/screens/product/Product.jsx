import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../components/Card'
const Product = () => {

    //states
    const [data, setData] = useState([])
    useEffect(()=>{
      axios.get("https://fakestoreapi.com/products").then((res)=>{
        console.log(res.data);
        setData(res.data)
      }).catch((err)=>{
        console.log(err);
      })

    },[])

  return (
    <>
    <div className='flex justify-evenly flex-wrap mt-[5rem] gap-5'>
      {data.length>0 ? data.map((item, index)=>{
        return <Card key={item.id} src={item.image} title={item.title} description={item.description} price={item.price} id={item.id}/>
      }): <h1>Loading...</h1>}
    </div>
    </>

  )
}

export default Product