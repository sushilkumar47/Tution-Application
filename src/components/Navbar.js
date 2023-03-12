import React from 'react'
import { useNavigate } from "react-router-dom";




export default function Navbar() {
  // const navigate = useNavigate();
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `/Login`; 
  //   navigate(path);
  // }

  const sushil=()=>{
    alert("there is no login & sign up page develope yet")
  }


  return (
   <><header className="p-3 text-bg-muted border-bottom">
   <div className="container">
     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
       </a>

       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
         <li><a href="#home" id='home' className="nav-link px-2 text-White me-2">Home</a></li>
         <li><a href="#Best-courses" className="nav-link px-2 text-White me-2">Courses</a></li>
         <li><a href="#Pricing" className="nav-link px-2 text-White me-2">Pricing</a></li>
         <li><a href="#aboutUs" className="nav-link px-2 text-White me-2">AboutUs</a></li>
         <li><a href="#Faculty" className="nav-link px-2 text-White me-2">Faculty</a></li>
         <li><a href="#contactUs" className="nav-link px-2 text-White me-2">contactUs</a></li>
       </ul>

       <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
         <input type="search" className="form-control form-control-primary text-bg-light" placeholder="Search..." aria-label="Search"/>
       </form>

       <div className="text-end">
       
         <button type="button" className="btn btn-outline-primary me-2" onClick={sushil} >Login</button>
         <button type="button" className="btn btn-outline-primary me-2"onClick={sushil}>Sign-up</button>
       </div>
     </div>
   </div>
 </header>
 </>
  )
}
