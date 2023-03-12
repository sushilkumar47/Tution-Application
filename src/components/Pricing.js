import React from 'react'

export default function Pricing() {
  return (
    <><div className="container py-3">
    <header>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h2 className="pb-2 border-bottom d-flex justify-content-center " id='Pricing'>Pricing</h2>
        <p className="fs-5 text-muted">now you can learn monthly yearly and course wise also </p>
      </div>
    </header>
  
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Silver</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">3000Rs<small className="text-muted fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>All acess of courses</li>
                <li>Not downloadable</li>
                <li>No faculty support</li>
                <li>Learn at any time</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Gold</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">6000Rs<small className="text-muted fw-light">/course</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>All acess of courses</li>
                <li>downloadable content</li>
                <li>No faculty support</li>
                <li>Learn at any time</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 shadow-sm">
              <h4 className="my-0 fw-normal">Diamond</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">28000Rs<small className="text-muted fw-light">/year</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>All acess of courses</li>
                <li>downloadable content</li>
                <li>faculty support</li>
                <li>Learn at any time</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div></>
  )
}
