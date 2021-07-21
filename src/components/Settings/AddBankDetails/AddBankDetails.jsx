import React from 'react'
import "./AddBankDetails.css"

function AddBankDetails() {
    return (
        <div className="container">
            <div className="row mt-4 addbank mx-auto">
                <div className="col bg-white addbank">
                    <div>
                         <h1 className="AddBank text-center">Add bank account</h1>
                         <div>
                             <button className="btn addBankX">X</button>
                         </div>
                         <hr className="new4"></hr>
                    </div>
                    <h6 className="cash">Cash withdrawn will be paid into this bank account</h6>
                   <form className="mt-4">
                        <div class="form-group">
                        <select class="form-control cashopt cashRole" id="exampleFormControlSelect1" placeholder="Choose a role">
                        <option>Choose a role</option>
                        </select>
                        </div>
                        <div class="form-group">
                        <input type="password" class="form-control cashopt numAct" id="exampleInputPassword1" placeholder="Account number"/>
                        </div>
                        <div class="form-group">
                        <input type="text" class="form-control cashopt gtcash" id="inputAddress2" placeholder="Account name"/>
                        </div>
                        <button type="submit" class="btn bg-warning btn-save">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBankDetails
