import React from 'react'
import './BusinessProfile.css';
import  birdy from '../../birdy.png';

function MyAccount() {
    return (
        <div className="mt-3">
        <div className="container">
        <div className="mt-5">
               <h3>Settings</h3>
               <p><small>Curabitur arcu erat accumsan imperdiet.</small></p>
               <div className="mt-4">
                   <p className="mbl">My Account</p>
                   <p className="">Business Profile</p>
                   <p className="mbl">Bank Information</p>
                   <p className="mbl">Manage Users</p>
                   <p className="mbl">Change Password</p>
                   <p className="mbl">Logout</p>
               </div>
    </div> 
            <div class="row twi rounded">
            <div class="col bg-white rounded">
                <div className=" upb">
                <h1 className="large">.</h1>
                <img src={birdy} className="birdy" alt="birdy" />
                <i class="fas fa-camera cam-1 rounded"></i>
                
                
                </div>
                                <div>
                                <form className="px-5 rt rtyy">
                <div class="form-row ">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty" id="inputAddress" placeholder="Phone number"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty2" id="inputAddress2" placeholder="Email address"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty" id="inputAddress" placeholder="Phone number"/>
                </div>
                <div class="form-group">
                <input type="text" class="form-control fct fcty2" id="inputAddress2" placeholder="Email address"/>
                </div>
                <div class="form-group">
                <textarea class="form-control text-muted ta" id="exampleFormControlTextarea1" rows="3">Company description</textarea>
                </div>
                <button type="submit" class="btn btn-warning bty"><b>Save changes</b></button>
                </form>
                </div>
            </div>
            </div>
          
        </div>
        </div>
    )
}

export default MyAccount
