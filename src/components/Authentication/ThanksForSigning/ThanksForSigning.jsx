import React from 'react'
import Logo from "../Logo.png";
import "./ThanksForSigning.css";

function ThanksForSigning() {
    return (
        <div>
            <div className="container mt-3">
<div class="row px-4">
  <div class="column-1">
    <div className="px-4 clap">
    <img src={Logo} width={30} height={30} alt="Logo" className="img-thumbnail" />
      </div>
    <h2 className="px-4 trust">Trust us to always <span className="text-warning">deliver</span></h2>
    <p className=" px-4 truck"> A platform where truck owners/logistics companies or transporters can have direct access to companies and individuals that want to move their goods to different  states in Nigeria.</p>
    <p className=" px-4 africa">© 2021 Pine Africa. All rights reserved.</p>
  </div>

  
  <div className="column-2 px-4">
      <div className="mtop">
    <h4 className="text-center mt-5">Thanks for signing up with us! 🎉</h4>
    <div className="px-5">
    <p className="text-center text-secondary px-5 text">Your sign up was successful! You can invite your team (e.g, drivers) to join you or skip for later.</p>
    </div>
<div className="px-5 formt">


<div className="px-5">
  <button type="submit" className="btn btn-warning btn-lg btn-block mt-4"><b>Invite your team</b></button>
  </div>
  <div className="px-5 mt-3">
      <p className="px-3"><span className="text-secondary">Don’t want to do this now?</span><b> Continue to dashboard</b></p>
  </div>
  </div>

    
  

            
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ThanksForSigning
