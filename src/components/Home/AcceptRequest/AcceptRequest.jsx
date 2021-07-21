import React from 'react'
import "./AcceptRequest.css"

function AcceptRequest() {
    return (
        <div className="container">
            <div className="row newUsers mt-4 mx-auto">
                <div className="col bg-white newUserCol">
                    <div className="">
                        <h4 className="text-center mt-4 newUserInv">Accept request</h4>

                        <div className="close-btn">
                            <button className="btn close1">X</button>
                            <hr class="new3"></hr>
                        </div>
                        <div>
                            <h6 className=" choosed mt-4">Choose a driver & vehicle for this booking request to accept it.</h6>
                        </div>
                        <div className="aceptIt">
                            <form className="form1">

                                <select class="form-control accept px-4" id="exampleFormControlSelect1">
                                    <option>Choose a role</option>
                                </select>
                                <select class="form-control accept accept2" id="exampleFormControlSelect1">
                                    <option>Choose a role</option>
                                </select>

                                <button className="btn bg-warning confrimtrip">Confirm trip</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcceptRequest
