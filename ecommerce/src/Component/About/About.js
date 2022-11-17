import React from 'react'
import { NavLink } from 'react-router-dom';
// import web from "../src/Images/motivepic.jpg";
import './About.css'

export default function About() {
  return (
    <div>
      <div className='app'>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">

            
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                Grow your business with<strong className="brand-name">Rockerz</strong>

              </h1>
              <h2 className="my-3">
              The Rockerz were an American rock band originally from Atlanta, Georgia, United States, that experienced popularity in the Southeastern United States during the 1990s-2000s.
                 We are the team of Rockerz developer making website
              </h2>
              <div className="mt-3">
                <NavLink to="/Cart" className="btn-get-started">Get Started</NavLink>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img w-30">
              <img   src={"../../../Images/collaborate pic.webp"} className="motivepic" alt="homeimg"height="500px" width="500px"/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
