import React from 'react';
import './Fleets.css';


function Fleets() {
    return (
        <div className="mt-5 mx-auto twik">
            <div className="container-fluid mt-3">
        <div className="container px-4">
     

     {/* first container */}

    <div className="container mt-3 trik">
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom rounded">
        <div className="row">
            <div className="col">
            <span className="px-2"><b>Drivers</b></span>
            <span className="px-5 text-secondary"><b>Vehicle</b></span>
            </div>
        </div>
</nav>


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


<div className="container bg-white">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">PHONE NUMBER</th>
      <th scope="col">TRIPS</th>
      <th scope="col">STATUS</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>



      
    <tr className="border-bottom">
    <td>Jacob Jonas</td>
      <td>+2341 2790707</td>
      <td>32</td>
      <td className="text"><button className="btn btn-primary btn-sm mb-5"><span className="text">Active</span></button></td>
     
      <td><b><p className="text-secondary mb-4">...</p></b></td>
    </tr>
    

  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>
    </div>

 
        
    )
}

export default Fleets;
