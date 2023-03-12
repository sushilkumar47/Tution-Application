import React from 'react'

export default function Courses() {
  return (
    <>
    <div className="container px-4 py-5 my-4 " id="hanging-icons">
    <h2 className="pb-2 border-bottom d-flex justify-content-center " id='Best-courses' >Best Courses</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h3 className="fs-2">Python</h3>
          <p>Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</p>
          <a href="#" className="btn btn-primary">
           know more
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h3 className="fs-2">Web development</h3>
          <p>Learn to code and become a Web Developer in 2023 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!</p>
          <a href="#" className="btn btn-primary">
            know more
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h3 className="fs-2">Machine learning</h3>
          <p>Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.</p>
          <a href="#" className="btn btn-primary">
           know more
          </a>
        </div>
      </div>
    </div>
  </div>
    <div className="container px-4 py-1 my-2 mt-0 " id="hanging-icons">
    {/* <h2 className="pb-2 border-bottom d-flex justify-content-center my-0 "></h2> */}
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h3 className="fs-2">Core Java</h3>
          <p>Comprehensive Java programming course integrated with design principles, best practices & instructor-led Java EE project</p>
          <a href="#" className="btn btn-primary">
           know more
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h3 className="fs-2">Database management</h3>
          <p>Beginner-Intermediate practical experience in Database Administration (DBA) SQL Server. Was for Microsoft exam 70-462.</p>
          <a href="#" className="btn btn-primary">
            know more
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <div>
          <h3 className="fs-2">Mobile development</h3>
          <p>Improve your career options by learning Android app Development. Master Android Studio and build your first app today</p>
          <a href="#" className="btn btn-primary">
           know more
          </a>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
