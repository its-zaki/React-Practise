import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src, title, description, price, id}) => {
  const navigate = useNavigate()
  function SingleProductPage(){
    navigate(`/SingleProduct/${id}`)
  }

  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-[150px] '  src={src} alt={title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description.slice(0 , 100)}...</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button onClick={SingleProductPage} className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div></>
  )
}

export default Card