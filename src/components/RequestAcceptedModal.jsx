import { Modal, Button, Form } from 'react-bootstrap'


const RequestAcceptedModal = (props) => {
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
					Request accepted!
				</Modal.Title>
			</Modal.Header>
			<div>

				<Modal.Body style={{ padding: "49px" }}>
					<p style={{ lineSpacing: '0.004em', lineHeight: '22px' }}>
						You have successfully accepted this booking request and the driver will be notified so they can start preparing for the trip.
					</p>
					<div style={{ display: 'flex', paddingBottom: '10px' }}>
						<Button variant="light" style={{ width: '100%' }} onClick={props.onHide}><span>View trip details</span></Button>
					</div>

					<div style={{ display: 'flex' }}>
						<Button style={{ width: '100%', backgroundColor: 'white', color: 'black' }}><span><strong>Continue to Bookings</strong></span></Button>
					</div>
				</Modal.Body>
			</div>
		</Modal >
	)
}

export default RequestAcceptedModal