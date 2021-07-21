import React from 'react'
import "./Failed.css"

function Failed() {
    return (
         <div className="container">
        <div class="row bg-white mt-5 card mx-auto">
<div class="col-9">
  <div className="mt-5">
  <div className="">
  <i class="fas fa-exclamation"></i>
      <button className="btn circleT"><span className="quest"></span></button>
      </div>
      <div className="allF">
      <h3 className=" text-center Inv">Request rejected!</h3>
      <div className="will">
          <p className=" px-4 quam"><b>Curabitur aliquet quam id dui posuere blandit. Mauris</b></p>
          <p className="bland "><b>blandit aliquet elit, eget tincidunt nibh pulvinar.</b></p>
      </div>
      <div className="px-5">
      <button type="button" className="btn btn-secondary btn-lg"><span className="dashb">View trip details</span></button>
      </div>
      <h6 className="max-auto mt-4 cont">Continue to bookings</h6>
      </div>
  </div>
</div>
    </div>
    </div>
    )
}

export default Failed
