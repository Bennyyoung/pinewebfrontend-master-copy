import React, { useState } from 'react';
import "./VerifyAccount.css";
import Logo from "../Logo.png";

function VerifyAccount() {
  const [passwordShown, setPasswordShown] = useState(false)
  // const [PasswordInputType, ToggleIcon] = PasswordToggle();

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true)
  }
    return (
        <>
        
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

  
  <div class="column-2 px-4">
      <div className="mtop">
    <h4 className="text-center mt-5">Verify your account to continue</h4>
    <p className="text-center text-secondary">We sent you a verification code to jeremiah@ellie-logistics.com & +2349087476412. Enter the verification code to continue</p>
<div className="px-5">

<div>
<div className="btn-toolbar px-5" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group px-4" role="group" aria-label="First group">
   
  </div>
  <div class="btn-group" role="group" aria-label="Second group">
    
  </div>
  <div className="btn-group" role="group" aria-label="Third group">
    <button type="button" className="btn btng">2</button>
  </div>
  <div className="btn-group px-2" role="group" aria-label="Third group">
    <button type="button" className="btn btng">5</button>
  </div>
  <div className="btn-group" role="group" aria-label="Third group">
    <button type="button" className="btn btng"></button>
  </div>
  <div className="btn-group px-2" role="group" aria-label="Third group">
    <button type="button" className="btn btng"></button>
  </div>
  <div className="btn-group" role="group" aria-label="Third group">
    <button type="button" className="btn btng"></button>
  </div>
</div>
</div>
<div className="mt-5 px-5">
    <button type="button" className="btn btn-warning btn-lg btn-block"><b>Verify account</b></button>
  </div>
            <div className="px-2 mt-3">
            <div className="px-5">
                <p className="px-5"><span className="text-secondary">Code will expire in 01:59?</span> <b className="resend">Resend code</b></p>
            </div>
            </div>
            </div>
         </div>
          </div>
          </div>
          </div>
  
        </>
    )
}

export default VerifyAccount
