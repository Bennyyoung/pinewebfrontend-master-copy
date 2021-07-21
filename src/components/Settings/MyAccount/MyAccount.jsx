import React from 'react'
import './MyAccount.css';
import  Photo from '../../Photo.png';

function MyAccount() {
    return (
        <div className="mt-3">
        <div className="container">
        <div className="mt-5">
               <h3>Settings</h3>
               <p><small>Curabitur arcu erat accumsan imperdiet.</small></p>
               <div className="mt-4">
                   <h6 className="">My Account</h6>
                   <p className="mbl">Business Profile</p>
                   <p className="mbl">Bank Information</p>
                   <p className="mbl">Manage Users</p>
                   <p className="mbl">Change Password</p>
                   <p className="mbl">Logout</p>
               </div>
    </div> 
            <div class="row twi rounded">
            <div class="col bg-white rounded">
                <div>
                <img src={Photo} className="Photo" alt="Photo" />
                <i class="fas fa-camera cam rounded"></i>
                <h1 className="bigDot">.</h1>
                </div>
                                <div>
                                <form className="px-5 mt-3 rt">
                <div class="form-row ">
                    <div class="form-group col-md-6-sm px-5 ">
                    <input type="email" class="form-control dtp" id="inputEmail4" placeholder="Firsrt name"/>
                    </div>
                    <div class="form-group col-md-6-sm">
                    <input type="password" class="form-control pfct pfcty2" id="inputPassword4" placeholder="Last name"/>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty" id="inputAddress" placeholder="Phone number"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty2" id="inputAddress2" placeholder="Email address"/>
                </div>
                <div class="form-group">
                    <select class="form-control fct fcty3" id="exampleFormControlSelect1" placeholder="Role">               
                 </select>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty4" id="inputAddress2" placeholder="Account type"/>
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
