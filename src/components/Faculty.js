import React from 'react'

export default function Faculty() {
  return (
    <>
    <div className="container py-5 my-5" id='Faculty'>
    <h2 className="pb-2 border-bottom d-flex justify-content-center ">Faculty</h2>
    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Languages</strong>
          <h3 className="mb-0">Shradha Kulkarni</h3>
          <div className="mb-1 text-muted">9 Years Experience</div>
          <p className="card-text">Ex Microsoft Employee.</p>
          <p>strong knowledge in languages like java python c++ c.</p>
         
        </div>
        <div className="col-auto d-none d-lg-block">
        <img src="https://source.unsplash.com/1600x900/?teacher" className="bd-placeholder-img" width="200" height="250"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" alt="" />

        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Database</strong>
          <h3 className="mb-0">Dr. Rajiv Shrinivasan</h3>
          <div className="mb-1 text-muted">11 Years Experience</div>
          <p className="">Ex Amazon Employee.</p>
          <p>strong knowledge in database like oracke mysql aws firebase mongoDb.</p>
          </div>
        <div className="col-auto d-none d-lg-block">
        <img src="https://source.unsplash.com/1600x900/?teacher" className="bd-placeholder-img" width="200" height="250"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" alt="" />
        </div>
      </div>
    </div>
  </div>
    </div>
    </>
  )
}
