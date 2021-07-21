import GoogleMapReact from 'google-map-react';
import { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useGoogleMaps } from "react-hook-google-maps";
import { Modal, Button, Form } from 'react-bootstrap'
import RequestRejectModal from './RequestRejectModal'
import RequestAcceptedModal from './RequestAcceptedModal'
import Nestle from './Nestle'
import instance from '../axiosConfig'
import Moment from 'react-moment'

<div>

 <RequestRejectModal />

 <RequestAcceptedModal />

</div>



const BookingDetailsNew = (props) => {
 const { ref, map, google } = useGoogleMaps(
  'AIzaSyDMrO6PYB6Hi3Ke6vhE3KYLSYuhHegtp2Q',
  {
   center: { lat: 0, lng: 0 },
   zoom: 3,
  }
 )

 const [modalShowAccepted, setModalShowAccepted] = useState(false)
 const [modalShowRejected, setModalShowRejected] = useState(false)
 const [modalShowRequestRejected, setModalShowRequestRejected] = useState(false)
 const [modalShowRequestAccepted, setModalShowRequestAccepted] = useState(false)
 const [trips, setTrips] = useState([])



 const DetailsRejectedRequest = (props) => {
  return (
   <Modal
    {...props}
    arialLabelledby="contained-modal-title-vcenter"
    centered
    animation
    style={{ borderRadius: '20px' }}
   >
    <Modal.Header closeButton style={{ padding: "10px" }}>
     <Modal.Title id="contained-modal-title-vcenter">
      Rejected Request
     </Modal.Title>
    </Modal.Header>
    <div style={{ display: 'flex' }}>

     <Modal.Body style={{ padding: "22px" }}>
      <h6 style={{ fontWeight: 'bold', width: '480px', lineHeight: '26px' }}>Are you sure want to reject this request?</h6>
      <p style={{ lineSpacing: '0.004em', lineHeight: '22px' }}>
       Do you want to reject this delivery request. It will be passed on to another delivery company. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
      </p>
      <div style={{ display: 'flex' }}>
       <div style={{ width: '30%' }}>
       </div>
       <Button variant="light" style={{ width: '35%', marginRight: '20px', padding: '13px, 32px, 13px, 32px', width: '111px' }} onClick={props.onHide}><span><strong>Cancel</strong></span></Button>


       <Button variant="danger" style={{ width: '35%' }}
        onClick={() => setModalShowRequestRejected(true)}><span><strong>Reject this Request</strong></span></Button>
      </div>
     </Modal.Body>
    </div>
   </Modal >
  )
 }


 useEffect(() => {
  instance.get('/trips?filter=pending').then((res) => {
   setTrips(res.data.data.data);
  }).catch((err) => {
   console.log(err);
  })
 }, [])

 const DetailsAcceptedRequest = (props) => {
  return (
   <>

    {
     trips.map(trip => {

      return (
       <Modal
        {...props}
        arialLabelledby="contained-modal-title-vcenter"
        centered
        animation
        style={{ borderRadius: '20px' }}
       >
        <Modal.Header closeButton style={{ padding: "10px" }}>
         <Modal.Title id="contained-modal-title-vcenter">
          Accept Request
         </Modal.Title>
        </Modal.Header>
        <div style={{ display: 'flex' }}>

         <Modal.Body style={{ padding: "22px" }}>
          <Form>
           <Form.Label style={{ padding: "10px" }}>Choose a driver & vehicle for this booking request to accept it</Form.Label>
           <Form.Control as="select" placeholder="Driver">
            <option>Choose a driver</option>
            <option>{trip.driver ? trip.driver : "Option 1"}</option>

           </Form.Control>
           <br />
           <Form.Control as="select" placeholder="Vehicle">
            <option>Choose a vehicle</option>
            <option>{trip.vehicle ? trip.vehicle : "Option 1"}</option>
           </Form.Control><br />

           <Button variant="warning" style={{ width: '100%' }} onClick={() => {
            setModalShowRequestAccepted(true)
           }}><span><strong>Confirm trip</strong></span></Button>
          </Form>
         </Modal.Body>
        </div>
       </Modal>
      )
     })
    }
   </>

  )
 }




 return (
  <div className="container rounded">
   <div className="border rounded shadow-lg my-30" style={{ borderRadius: "20px" }}>
    <div className="row" >
     <div className="col-md-6 d-none d-md-block d-lg-block bg-white" style={{ padding: '20px' }}>
      <div className="left">

       {/* Trip info */}

       {/* Trip header */}
       {
        trips.map(trip => {

         function getFormattedDate() {
          var date = trip.recipient.created_at
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var year = date.getFullYear();
          return month + '/' + day + '/' + year;
         }

         return (
          <>
           <div style={{ display: "flex" }}>
            {/* Img svg */}
            <Nestle />
            <div key={trip.id} style={{ width: "60%" }}>
             <div><strong>{trip.recipient.name} </strong></div>
             <div>{trip.recipient.contact}</div>

            </div>
            <div style={{ width: "15%", border: "1px solid pink", borderRadius: "22px", backgroundColor: '#FCE3E5', color: 'red', textAlign: 'center', width: '50px', height: '22px', padding: '1px, 12px, 1px, 12px' }}>New

            </div>

           </div>
           <br />
           {/* Table */}
           <table className="table">
            <tbody>
             <tr>
              <td>Booking ID</td>
              <td><strong>#{trip.id}</strong></td>
             </tr>
             <tr>
              <td>Date & Time</td>
              <td><strong><Moment parse="YYYY-MM-DD HH:mm">{trip.recipient.created_at}</Moment></strong></td>
             </tr> <tr>
              <td>Nature of goods</td>
              <td><strong>{trip.goods.name}</strong> <strong>{"(<" + trip.tonnage + " ton)"}</strong></td>
             </tr> <tr>
              <td>Value of goods</td>
              <td><strong>₦{(trip.value_of_goods).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong></td>
             </tr> <tr>
              <td>Estimated fare</td>
              <td><strong>{trip.price ? trip.price : "₦0.00"}</strong></td>
             </tr>
            </tbody>
           </table>
           {/* Bottom */}
           <div style={{ display: "flex" }}>
            <div className="trailing-map-icon" style={{ width: "25%" }}>
             <div><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5.5" r="5.5" fill="#FACF19" />
             </svg>
             </div>
             <div style={{ marginLeft: "5px" }}><svg width="1" height="57" viewBox="0 0 1 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line opacity="0.7" x1="0.5" y1="0.5" x2="0.499998" y2="56.5" stroke="#FACF19" strokeLinecap="round" />
             </svg>
             </div>
             <div><svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.93476 14.6974C0.772578 8.5263 0 7.89296 0 5.625C0 2.51839 2.46242 0 5.5 0C8.53758 0 11 2.51839 11 5.625C11 7.89296 10.2274 8.5263 6.06524 14.6974C5.7921 15.1009 5.20787 15.1009 4.93476 14.6974ZM5.5 7.96875C6.76566 7.96875 7.79167 6.91942 7.79167 5.625C7.79167 4.33058 6.76566 3.28125 5.5 3.28125C4.23434 3.28125 3.20833 4.33058 3.20833 5.625C3.20833 6.91942 4.23434 7.96875 5.5 7.96875Z" fill="#FACF19" />
             </svg>
             </div>

            </div>
            <div style={{ width: "75%" }}>
             <div>
              <div><strong>{JSON.parse(trip.pickup).description}</strong></div>
              <div>lightedned address</div>

             </div>
             <br />

             <div>
              <div><strong>{JSON.parse(trip.delivery)[0].payload.description}</strong></div>
              <div>lightedned address</div>
             </div>
            </div>

            <br />
            <br />
           </div>

           <hr />

           <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}><Button type="button" variant="light" style={{ padding: "8px 20px" }} onClick={() => setModalShowRejected(true)}>Reject Request</Button></div>

            <div style={{ width: "50%" }}><Button type="button" style={{ padding: "8px 20px" }} variant="warning" onClick={() => setModalShowAccepted(true)}>Accept Request</Button></div>

            <DetailsAcceptedRequest
             show={modalShowAccepted}
             onHide={() => setModalShowAccepted(false)}
            />
            <DetailsRejectedRequest
             show={modalShowRejected}
             onHide={() => setModalShowRejected(false)}
            />
            <RequestRejectModal
             show={modalShowRequestRejected}
             onHide={() => setModalShowRequestRejected(false)}
            />
            <RequestAcceptedModal
             show={modalShowRequestAccepted}
             onHide={() => setModalShowRequestAccepted(false)}
            />
           </div>
          </>
         )
        })
       }
      </div>
     </div>

     <div className="col-md-6 p-40">
      {/* <Map
															google={google}
															zoom={8}
															style={mapStyles}
															initialCenter={{ lat: 47.444, lng: -122.176 }}
													>
															{displayMarkers()}
													</Map> */}
      <div ref={ref} style={{ width: '100%', height: '100%', margin: '0 -45px 0 -15px' }} />
     </div>
    </div>

   </div>
  </div>
 )
}

export default BookingDetailsNew