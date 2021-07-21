import React from 'react'
import "./ChangePassword.css"

function ChangePassword() {
    return (
        <div>
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
                <h6 className="changePassword">Change your password</h6>
                <p className="quis">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                <div>
                <form className="px-5 mt-5 rt fomty">
                <div class="form-group">
                    <input type="text" class="form-control fct fcty" id="inputAddress" placeholder="Current password"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty2" id="inputAddress2" placeholder="New password"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control fct fcty2" id="inputAddress2" placeholder="Confirm password"/>
                </div>
                <button type="submit" class="btn btn-warning bty"><b>Save changes</b></button>
                </form>
                </div>
            </div>
            </div>
          
        </div>
        </div>
        </div>
    )
}

export default ChangePassword
