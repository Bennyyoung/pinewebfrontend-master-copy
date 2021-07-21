import React from 'react'
import "./EnterBusiness.css"
import Logo from "../Logo.png";



function EnterBusiness() {
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

  
  <div class="column-2 px-4">
    <h4 className="text-center mt-5">Enter your business detail, </h4>
    <div className="px-5">
    <p className="text-center text-secondary px-5 text">You cannot edit or change your company name again after this screen, so confirm that the spelling is correct.</p>
    </div>
<div className="px-5 formt">
<form>
  <div class="form-row">
  </div>
  <div class="form-group px-5">
    <label for="inputAddress"></label>
    <input type="text" className="form-control vy" id="inputAddress" placeholder="Company name"/>
  </div>
  <div class="form-group px-5">
    <label for="inputAddress2"></label>
    <input type="text" className="form-control vy" id="inputAddress2" placeholder="Company phone number"/>
  </div>
  <div class="form-group px-5">
    <label for="inputAddress2"></label>
    <input type="text" className="form-control vy" id="inputAddress2" placeholder="Company email address"/>
  </div>
  <div class="input-group px-5 text-area">
  <textarea className="form-control text-area" aria-label="With textarea" placeholder="Company description"></textarea>
</div>
<div className="px-5">
  <button type="submit" className="btn btn-warning btn-lg btn-block mt-4"><b>Continue</b></button>
  </div>
</form>
    
  

            
            </div>
         </div>
          </div>
          </div>
        </div>
    )
}

export default EnterBusiness
