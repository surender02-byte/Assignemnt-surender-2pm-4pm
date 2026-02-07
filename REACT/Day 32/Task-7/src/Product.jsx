import React from 'react'

function Product({name , price,image}) {
  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4">
          <div className="card shadow">
            <img
              src={image}
              className="card-img-top"
              alt="product"
            />
            <div className="card-body text-center">
              <h5>{name}</h5>
              <p>{price}</p>
              <button className="btn btn-success w-100">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product