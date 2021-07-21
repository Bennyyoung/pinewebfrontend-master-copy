import React from 'react'
import "./InviteNewUsers.css"

function InviteNewUsers() {
    return (
        <div className="container">
            <div className="row newUsers mt-4 mx-auto">
                <div className="col bg-white newUserCol">
                    <div className="">
                    <h4 className="text-center mt-4 newUserInv">Invite new users</h4>
                    <div className="send-btn">
                    <button className="btn send1">Send</button>
                    </div>
                    <div className="close-btn">
                    <button className="btn close1">X</button>
                    <hr class="new1"></hr>
                    </div>
                    <div>
                    <h6 className="semop  mt-4">Curabitur arcu erat, accumsan id imperdiet et, porttitor at semop.</h6>
                    </div>
                    <form className="form1">
  <div class="row">
    <div class="col">
      <input type="text" class="form-control emRem EmR border-warning" placeholder="Email or phone number"/>
    </div>
    <div class="col">
    <select class="form-control emRem2 EmR" id="exampleFormControlSelect1">
    <option>Choose a role</option>
    </select>
    </div>
    <button className="btn bg-white  ex-btn"><span className="ex-btn-close">X</span></button>
    <hr class="new2"></hr>
  </div>
</form>
<form className="form2">
  <div class="row">
    <div class="col">
      <input type="text" class="form-control emRem EmR emrr" placeholder="Email or phone number"/>
    </div>
    <div class="col">
    <select class="form-control emRem2 EmR" id="exampleFormControlSelect1" placeholder="Choose a role">
      <option>Choose a role</option>
    </select>
    </div>
    <button className="btn bg-white  ex-btn"><span className="ex-btn-close">X</span></button>
  </div>
</form>
                    </div>
                    <div class="vl3"></div>
                    <h6 className="mt-4 px-3 addst">+ Add more staff</h6>
                </div>
            </div>
        </div>
    )
}

export default InviteNewUsers
