import React from 'react'
import "./InviteSent.css"

function InviteSent() {
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
          <button type="button" className="btn btn-secondary btn-lg"><span className="dashb">Continue to Dashboard</span></button>
          </div>
          <div className="px-5 mt-2">
          <p className="px-2 stil">Still want to add more team member? <span className="under"><b>Click here</b></span></p>
          </div>
          </div>

      </div>
  </div>
        </div>
        </div>
    )
}

export default InviteSent
