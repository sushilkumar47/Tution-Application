import React from 'react'

export default function Aboutus() {
  return (
    <>
    
    <div className="accordion px-5 mx-5 py-5 my-5" id="accordionExample">
    <h2 className="pb-2 border-bottom d-flex justify-content-center " id='aboutUs'>About Us</h2>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          #What is Learno
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Learno is growing technical education learning platform.</strong> Whether you want to learn or to share what you know, you have come to the right place. As a global destination for online learning, we connect people through knowledge. though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          #Who can use Learno
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Learno can useful to any person who want to take technical knowledge.</strong> The simplest example of personalized learning would be when an instructor provides learning material with proper content and context, and in the best way for the learner. This is done by using the existing knowledge that the instructor has of the student.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          #What is goal of Learno
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Help student to make their career.</strong> online bootcamp and one of the world is leading certification training providers. We partner with companies and individuals to address their unique needs, providing training and coaching that helps working professionals achieve their career goals.
        </div>
      </div>
    </div>
  </div></>
  )
}
