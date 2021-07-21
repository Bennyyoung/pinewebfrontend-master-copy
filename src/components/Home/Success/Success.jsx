import React from 'react'
import "./Success.css"

function Success() {
    return (
        <div className="container">
        <div class="row bg-white mt-5 card mx-auto">
<div class="col-9">
  <div className="mt-5">
  <div className="iconz">
  <i class="fas fa-check check2"></i>
  <i class="fas fa-check text-warning check1"></i>
      <button className="btn tmrk"></button>
      </div>
      <div className="allF">
      <h3 className=" text-center Inv">Request accepted!</h3>
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

export default Success
