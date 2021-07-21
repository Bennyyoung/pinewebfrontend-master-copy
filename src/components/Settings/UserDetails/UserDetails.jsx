import React from 'react'
import "./UserDetails.css"
import  Ellipse from '../../Ellipse.png';

function UserDetails() {
    return (
        <div className="container mt-3">
            <div className="row Userd mx-auto">
                <div className="col Userd2">
                    <button className="btn bg-white mt-4 btnX">X</button>
                    <img src={Ellipse} className="Ellipse" alt="Ellipse" />
                    <h6 className="text-center JrUser mt-2">Jeremiah Righteous</h6>
                    <p className="text-center userN">09087635463</p>
                    <p className="text-center edetails">Edit detail</p>
                    <div className="row bg-white roleCol mx-auto Rinfo allRole">
                        <div className="col">
                            <div className="border-bottom">
                                <p className="mt-4 font-size rightItems">Role</p>
                                <p className="text-right mb-4 driver font-size leftItems">Driver</p>

                                <p className="mt-4 font-size rightItems">Status</p>
                                <p className="text-right mb-4 driver font-size leftItems">Active</p>

                                <p className="mt-4 font-size rightItems">Email address</p>
                                <p className="text-right mb-4 driver font-size leftItems">Jerimiah@hotmail.com</p>
                            </div>
                            <p className="mt-4  text-center font-size leftItems">Joined since Feb 4, 2020</p>
                        </div>
                    </div>
                    <div className="row mt-3 mx-auto">
                        <div className="col-6">
                            <button className="btn btn-secondary btnd1">Deactivate</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btnd2 mr-4">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
