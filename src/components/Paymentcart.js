import React from 'react'


export default function Paymentcart() {
  return (
    <>
    <h2 className="pb-2 border-bottom d-flex justify-content-center my-5 ">Your Cart</h2>
    <div className="container my-5 py-5 d-flex justify-content-center">
        <div className="card col-8 align-self-baseline">
  <h5 className="card-header">Your Cart</h5>
  <div className="card-body">
    <h5 className="card-title">This is diamond plan</h5>
    <p className="card-text"><strong>1 YEAR PLAN</strong></p>
    <p className="card-text my-2">TOTAL AMOUNT: <strong>Rs 28000</strong> </p>
   </div>
  </div>    
    <div className="card mx-5 py-5 align-self-baseline">
        <div className="card-body ">
          <h5 className="card-title">Order Summary</h5>
          <p className="card-text">Original Price:<strong className='strong mx-5'>28000</strong></p>
          <hr />
          <p className="card-text">Total Price:<strong className='strong mx-5'>28000</strong></p>
          <button type="button" class="btn btn-primary">I'm ready to pay </button>
        </div>
      </div>
      </div>
    </>
  )
}
