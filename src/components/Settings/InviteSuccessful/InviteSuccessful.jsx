import React from 'react'
import "./InviteSuccessful.css"

function InviteSuccessful() {
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
          <h3 className=" text-center Inv">Invite Sent Successful!</h3>
          <div className="will">
              <p className=" px-4 quam"><b>Curabitur aliquet quam id dui posuere blandit. Mauris</b></p>
              <p className="bland "><b>blandit aliquet elit, eget tincidunt nibh pulvinar.</b></p>
          </div>
          <div className="px-5">
          <button type="button" className="btn btn-secondary btn-lg"><span className="dashb">Close</span></button>
          </div>
          </div>
      </div>
  </div>
        </div>
        </div>
    )
}

export default InviteSuccessful
