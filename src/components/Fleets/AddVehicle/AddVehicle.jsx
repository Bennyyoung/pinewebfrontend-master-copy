import React from 'react'
import blackman from "../../blackman.jpg"
import "./AddVehicle.css"

function AddVehicle() {
    return (
        <div>
                <div class="row bg-white rounded mt-3 tr mx-auto">
  <div class="col bg-white ">
      <div>
      <button className="btn  font-weight-bold xw">X</button>
      </div>
      <p className="add font-weight-bold">Add a new driver</p>
      <div className="bot px-3">
      <button className="btn btn-secondary border-0 font-weight-bold  dis">Discard</button>
      <button className="btn btn-secondary ml-3 px-3 font-weight-bold btn-warning">Save</button>
      </div>
  </div>
        </div>
        <div className="tsa">
       <div className="container">
           <div className="container px-5">
               <h6 className="px-5 af">Choose vehicle type</h6>
               <div className="tlk">
               {/* <img src={blackman} className="blackman" alt="blackman" /> */}
               {/* <button className="btn btn-secondary upp mx-2 px-2">Upload photo</button> */}
               <div className="border-bottom mt-3">
               </div>
               <div >
                   <h6 className="bi mt-4">Basic Information</h6>
                   <p className="non text-muted">Amet minim mollit non deserunt ullamc o est sit aliqua dolor do amet sint.</p>
               </div>
               <div class="yu border-bottom">
                   <form classNam="container">

  <div class="form-group peep ref tref mt-3">
    <select class="form-control" id="exampleFormControlSelect1">
    </select>
    </div>

    <div class="form-group peep ret tref mt-2">
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>


  <div class="form-group peep ret tref mt-2">
    <input type="text" class="form-control" id="inputAddress2" placeholder="Email address"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6-sm">
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6-sm">
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group peep ref">
    <input type="text" class="form-control" id="inputAddress" placeholder="Phone number"/>
  </div>

  <div class="form-row">
  <div class="form-group col-md-6-sm">
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6-sm">
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
    </div>
  
</form>
               </div>
               <div>
                   <h6 className="mt-3 doc">Document upload</h6>
                   <p className="non text-muted">Amet minim mollit non deserunt ullamc o est sit aliqua dolor do amet sint.</p>
               </div>
               <div class="container">
  <div class="row upd">
    <div class="col-md-4 bg-dark">
        <div className="mt-1">
        <img src="..." className="rounded" alt="..." />
        </div>
        <div className="tys">
        <h3 className="text-white gyt df"><b>Driver’s License Document</b></h3> 
        <p className="text-white df dft"><small>File size max. of 5MB (PDF)</small></p> 
        </div>
        <div className="tw">
        <h6 className="text-warning tw">Upload</h6>
    </div>
    </div>
  </div>


  <div class="container mt-3">
  <div class="row updd">
    <div class="col-md-4 bg-dark">
        <div className="mt-1">
        <img src="..." className="rounded" alt="..." />
        </div>
        <div className="tys">
        <h3 className="text-white gyt df"><b>Driver’s License Document</b></h3> 
        <p className="text-white df dft"><small>File size max. of 5MB (PDF)</small></p> 
        </div>
        <div className="tw">
        <h6 className="text-warning tw"><small>Upload</small></h6>
    </div>
    </div>
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

export default AddVehicle
