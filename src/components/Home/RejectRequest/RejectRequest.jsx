import React from 'react'
import "./RejectRequest.css"

function RejectRequest() {
    return (
        <div className="container">
        <div className="row newUsers mt-4 mx-auto">
            <div className="col bg-white newUserCol">
                <div className="">
                <h4 className="text-center mt-4 newUserInv">Reject request</h4>
                
                <div className="close-btn">
                <button className="btn close1">X</button>
                <hr class="new3"></hr>
                </div>
                <div>
                <h6 className=" choosed mt-4">Choose a driver & vehicle for this booking request to accept it.</h6>
                <p className="doyou mt-4">Do you want to reject this delivery request. It will be passed on to another delivery company. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.</p>
                </div>
                <div className="aceptIt">
                <hr class="new4"></hr>

                <div>
                    <div className=" row rejectrequest">
                        <button className="btn bothbtn cancelbtn">Cancel</button>
                        <button className="btn bg-danger ml-3 bothbtn text-white rejectbtn">Reject this request</button>
                    </div>
                </div>
                
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
    )
}

export default RejectRequest
