import React from 'react'

export default function Contactus() {
  return (
    <> <div className="container"><h2 className="pb-2 border-bottom d-flex justify-content-center " id='contactUs'>Contact Us</h2>
    <div className="container my-5"><div className="mb-3">
    
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" className="btn btn-primary my-3 d-flex justify-content-center active">submit</button>
</div></div></div>    
    </>
  )
}
