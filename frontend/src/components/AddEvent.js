import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AddEventForm from './AddEventForm'

function AddEventModal (props) {
  return (
    <Modal className='addmodal'
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        Add Event
      </Modal.Header>

      <Modal.Body>
        <AddEventForm hide={props.onHide} user={props.user}/>
      </Modal.Body>
    </Modal>
  );
}

export default function AddCalEvent({ refresh, user }) {
  const [modalShow, setModalShow] = React.useState(false);

  if(user === '') {
    return (
    <div>
      Please Enter Username
    </div>
    )
  }
  return (
    <>
      <Button variant="outline-primary" 
        onClick={() => {
        setModalShow(true)
      }}>
        Add a New Event to your Schedule
      </Button>

      <AddEventModal
        show={modalShow}
        user={user}
        onHide={() => {
          setModalShow(false)
          refresh()
        }}
      />
    </>
  );
}