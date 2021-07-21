import { Modal, Button, Form } from 'react-bootstrap'

const RequestRejectModal = (props) => {
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
					Request rejected!
				</Modal.Title>
			</Modal.Header>
			<div>

				<Modal.Body style={{ padding: "26px" }}>
					<p style={{ lineSpacing: '0.004em', lineHeight: '22px' }}>
						You have successfully rejected this request and the booking will be assigned to another delivery company.
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

export default RequestRejectModal