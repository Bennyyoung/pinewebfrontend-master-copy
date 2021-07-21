import React from 'react'
import "./BankInformation.css"

function BankInformation() {
    return (
        <div>
            <div className="mt-3">
        <div className="container">
        <div className="mt-5">
               <h3>Settings</h3>
               <p><small className="arcu">Curabitur arcu erat accumsan imperdiet.</small></p>
               <div className="mt-4">
                   <p className="mbl">My Account</p>
                   <p className="">Business Profile</p>
                   <p className="mbl">Bank Information</p>
                   <p className="mbl">Manage Users</p>
                   <p className="mbl">Change Password</p>
                   <p className="mbl">Logout</p>
               </div>
    </div> 
            <div class="row twikky rounded">
            <div class="col bg-white rounded">
                <div className="mt-5 ml-5">
                <h6>Your bank accounts</h6>
                <p className="lectus">Porttitor lectus nibh. Curabitur aliquet quam id duiun. <span className="adc font-weight-bold">Add bank account</span></p>
                </div>
                <div>
                    <div className="row fb ml-5">
                      <div className="col-6 uni">
                       <div><span class="border-0 bg-danger"></span></div>
                       <button className="btn btn-secondary border-0 btu"></button>
                      <i class="fas fa-university univ "></i>
                      
                      <i class="far fa-edit editt"></i>

                      <i class="far fa-trash-alt trashh"></i>

                      <h6 className="fbank">First Bank Nigeria PLC</h6>
                      <p className="acN">3054385286</p>
                      </div>
                       
                    </div>
                               
                </div>


                <div className="mt-3">
                    <div className="row fb ml-5">
                      <div className="col-6 uni">
                       <div><span class="border-0 bg-danger"></span></div>
                       <button className="btn btn-secondary border-0 btu"></button>
                      <i class="fas fa-university univ "></i>
                      
                      <i class="far fa-edit editt"></i>

                      <i class="far fa-trash-alt trashh"></i>

                      <h6 className="fbank">First Bank Nigeria PLC</h6>
                      <p className="acN">3054385286</p>
                      </div>
                       
                    </div>
                               
                </div>



            </div>
            </div>

            
          
        </div>
        </div>
        </div>
    )
}

export default BankInformation
