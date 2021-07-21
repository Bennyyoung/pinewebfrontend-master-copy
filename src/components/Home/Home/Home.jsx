import { useEffect, useState } from "react";
import "./Home.css";
import instance from '../../../axiosConfig';
import { Dropdown, Button, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom";




function Home() {
  const [trips, setTrips] = useState([]);

  useEffect((history) => {
    instance.get('/trips?filter=pending').then((res) => {
      setTrips(res.data.data.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 bg-white rounded shadow w-32">
            <div className="row">
              <div className="col-md-6 p-25">
                <div className="mt-15 border-l">
                  <p>Total Amount earned</p>
                  <h5>₦2,809,334.00</h5>
                </div>
              </div>
              <div className="col-md-6 p-25">
                <div className="mt-15">
                  <p>Total Trips So far</p>
                  <h5>10,034</h5>
                </div>
              </div>
            
              
            </div>
          </div>
          <div className="col-md-6 off-2 bg-white shadow rounded">
            <div className="first-row p-15">
              <div className="row">
                <div className="col-md-2 mt-2">
                  <span className="lightbulb"><i className="fas fa-lightbulb f-25"></i></span>
                </div>
                <div className="col-md-8">
                  <h6>Account Online</h6>
                  <p>Go offline to get some well deserved rest.</p>
                </div>
                <div className="col-md-2">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1"></label>
                  </div>

                </div>
              </div>
            </div>

            <div className="first-row mt-3 mb-4">
              <div className="row">
                <div className="col-md-2 mt-2">
                  <span className="lightbulb"><i className="fas fa-calculator f-25"></i></span>
                </div>
                <div className="col-md-8">
                  <h6>Calculate fare</h6>
                  <p>Get an estimate of how much yout trip will cost.</p>
                </div>
                <div className="col-md-2">
                  <i className="fas fa-angle-double-right angle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 mt-4 w-100 shadow">
          <div className="row">
            <div className="col-md-5">
              <h4>Bookings</h4>
            </div>
            <div className="col-md-3">
              <input type="text" name="" className="form-control" placeholder="Search for bookings" id="" />
            </div>
            <div className="col-md-2">
              <div className="btn-group">
                <button type="button" className="btn btn-sort dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  All Truck Types
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="btn-group">
                <button type="button" className="btn btn-sort dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Today
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-4">
            <table className="table">
              <thead>
                <tr className="tr1">
                  <th>COMPANY</th>
                  <th>DESCRIPTION</th>
                  <th>PICKUP LOCATION</th>
                  <th>DESTINATION</th>
                  <th>ESTIMATED PRICE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip, index) => {
                  console.log("Trip: " + Object.keys(trip))
                  return (
                    <tr key={index}>
                      <td><Link to={"/details-new/" + trip.recipient.name} style={{ textDecoration: 'none', color: 'black' }}>
                        {trip.recipient.name}
                      </Link></td>
                      <td><Link to="/details-new" style={{ textDecoration: 'none', color: 'black' }}>
                        {trip.goods.name}
                      </Link></td>
                      <td><Link to="/details-new" style={{ textDecoration: 'none', color: 'black' }}>
                        {JSON.parse(trip.pickup).description}
                      </Link></td>
                      <td><Link to="/details-new" style={{ textDecoration: 'none', color: 'black' }}>
                        {JSON.parse(trip.delivery)[0].payload.description}
                      </Link></td>
                      <td><Link to="/details-new" style={{ textDecoration: 'none', color: 'black' }}>
                        {trip.price ? trip.price : "₦0.00"}
                      </Link></td>
                      <td>
                        <div className="dropdown">
                          <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">Accept Booking</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Reject Booking</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;
