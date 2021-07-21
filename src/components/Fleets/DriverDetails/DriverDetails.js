import React from 'react';
import './DriverDetails.css';
import blackman from "../../blackman.jpg"

export default function DriverDetails(){
    return(
        <div className="mt-3 mx-auto">
           <div class="container">
  <div class="row cardt mx-auto">
    <div class="col bg-white rounded border-right">  
        <div className="px-5  dip">
    <div class="row mt-5 tsp justify-content-center">
    <div class="col tup">
      <div>
    <img src={blackman} className="blackmann" alt="blackman" />
    </div>
    <div className="rj">
    <h1 className="jr">Jerimiah Righteous</h1> 
    <div className="dr"> 
    <h6 className="drt">Driver</h6>
    </div>
    <div className="drtd">
    <h6 className="drtt">4.8 <i class="fas fa-star star-1"></i></h6>
    <div className="drtdd">
      <h6 className="drttt">Rating</h6>
    </div>
    </div>
    <div className="verticalLine"></div>
    <div className="ddot"><h6 className=""><b>...</b></h6></div>
    </div>
    <div className="num-sec">
      <div className="thirtyFive">
      <h6 className="thirty-five mt-3 px-3 "><b>35</b></h6>
      </div>
      <h6 className="eighty"><b>80.2 KM</b></h6>
      <p className="comp">Completed trips</p>
      <p className="cov">Distance covered</p>
      <div className="vl-1"></div>
      </div>
    </div>
    </div>
    <p className=" mt-4 stat"><b>Status</b></p>
    <p className="act"><b>Active</b></p>
    <p className="phone"><b>Phone Number</b></p>
    <p className="num border-bottom"><b>+2348023456789</b></p>
    <hr class="line1"></hr>
    <p className="e-mail"><b>Email Address</b></p>
    <p className="jer"><b>jeremiah.r@hotmai..com</b></p>
    <hr class="line1"></hr>
    <p className="e-mail"><b>Address</b></p>
    <p className="float-right jer2"><b>4 Ilupeju Industrial Ave, Ilupeju, Lagos</b></p>
    <hr class="line1"></hr>
    </div>
    <div>
      <h6>Drivers documents</h6>
    </div>


    <div class="">
    <div class="bg-dark">
    <img src="..." className="rounded mt-2" alt="..." />
    <h3 className="text-white tzx mb-2"><b>Driver’s License Document</b></h3>
    <p className="dls">DRIVER’S LICENSE</p>
    <div className="upn">
    <h3 className="text-warning un text-right">Upload Now</h3>
    </div>
    </div>
    </div>




    </div>
    
    
   
    



    
    <div class="col rounded twip">
        <div>
        <h1 className="hist mt-2">Trip History(35)</h1>
        <button class="btn btn-secondary text-warning X border-0 font-weight-bold" type="submit">X</button>
        </div>
        <div className="scroll px-1">.
    <div class="col color set">thredf o</div>
    <div class="col color mt-2 tes">thredf o</div>
    <div class="col color mt-2 est">thredf o</div>
    <div class="col color mt-2 et">thredf o</div>
    </div>
    </div>
  </div>
  </div>
        </div>
    )
}