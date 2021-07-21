import axios from 'axios';
import React, { Component } from 'react';
import "./Bookings.css";

function Bookings() {
  return (
    <div class="container mt-5">
      <form>
        <fieldset>
          <legend><h1>Create Bookings</h1></legend>
          <div className="col-md-6">
            <div classsName="row">
              <div className="col-md-6">
                <label htmlFor="sendersName">Company</label>
                <input type="text" className="form-control" id="firstName" placeholder="Senders Name" value={this.state.sendersname} onChange={this.onChangeSendersName} required />
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
