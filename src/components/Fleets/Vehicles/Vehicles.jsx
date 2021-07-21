import React from 'react'
import "./Vehicles.css"

function Vehicles() {
    return (
        <div className="container">
            <div class="row justify-content-center mt-3">
  <div class="col bg-white">
      <div class="row border-bottom">
          <h6 className="px-4 mt-2">Drivers(6)</h6>
          <h6 className="px-2 mt-2">Vehicles(5)</h6>
      </div>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <form className="form-inline navbar-nav  offset-md">
      <input className="form-control mr-sm-2" type="search" placeholder="Search for drivers" aria-label="Search"/>
     
    </form>
    <div className="ml-auto">
    <button className="btn btn-1 dropdown-toggle text-dark font-weight-bold  btn-a"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             All status
         </button>
         <button className="btn btn-1 ml-2 btn-warning font-weight-bold " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Add driver
         </button>
         </div>
        </nav>
      </div>
      <div className = " row mt-3 border-bottom">
          <h6 className="px-3 name nldsa">NAME</h6>
          <h6 className="px-3 ml-auto licNum nldsa">LICENSE NUMBER</h6>
          <h6 className="px-3 ml-auto delivr nldsa">DELIVERER</h6>
          <h6 className="px-3 ml-auto status nldsa">STATUS</h6>
          <h6 className="px-3 ml-auto actn nldsa">ACTIONS</h6>
      </div>
      <div className="row mt-3">
          <p className=" px-3 hp">Mitsubishi 175 HP</p>
          <div className="agnl2">
          <p className=" px-3 ml-auto text-center position-relative agl">AGL 287 DX</p>
          </div>
          <div className="twnty2">
          <p className=" px-3 ml-auto twenty2">22</p>
          </div>
          <div className="actvd">
          <button className="px-2 ml-auto px-3 btn btn-primary actV">Active</button>
          </div>
          <p className=" ml-auto dotty">...</p>
      </div>
  </div>
        </div>
        </div>
    )
}

export default Vehicles
