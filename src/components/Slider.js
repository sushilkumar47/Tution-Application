import React from 'react'
// import images from './';
export default function Slider() {
  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-fade">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://source.unsplash.com/400x120/?technical" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className='text-light'>Welcome to Learno</h5>
        <p className='text-light'>new technology create new opportunity.</p>
        <button type="button" className="btn btn-danger mx-1">Python</button>
        <button type="button" className="btn btn-primary mx-1">Web development</button>
        <button type="button" className="btn btn-success mx-1">Java</button>
      </div>
    </div>
    <div className="carousel-item active" data-bs-interval="2000">
      <img src="https://source.unsplash.com/400x120/?technology" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-light'>Welcome to Learno</h5>
        <p className='text-light'>new technology create new opportunity.</p>
        <button type="button" className="btn btn-danger mx-1">Python</button>
        <button type="button" className="btn btn-primary mx-1">Web development</button>
        <button type="button" className="btn btn-success mx-1">Java</button>

      </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/400x120/?coding" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5 className='text-light'>Welcome to Learno</h5>
        <p className='text-light'>new technology create new opportunity.</p>
        <button type="button" className="btn btn-danger mx-1">Python</button>
        <button type="button" className="btn btn-primary mx-1">Web development</button>
        <button type="button" className="btn btn-success mx-1">Java</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
