import React from "react";

const SingleCard = ({src, title, description, price, id}) => {
  return (
    <div className=" w-[80%] h-[50%] flex justify-center m-auto mt-[5rem]">
      <div className="card lg:card-side bg-base-100 shadow-2xl w-[100%]">
        <figure className="w-[50%] s m-[3rem]">
          <img 
            src={src}
            alt={title}
          />
        </figure>
        <div className="card-body w-[50%]">
          <h2 className="card-title">New album is released!</h2>
          <p className="mt-3 "><h2><strong>Description:</strong></h2>{description}</p>
          <p className="mt-0"><h2><strong>Price:</strong></h2>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary ">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
