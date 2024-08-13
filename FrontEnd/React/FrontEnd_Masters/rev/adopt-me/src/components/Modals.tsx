import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Modals = ({ show, handleClose, petname }) => {
    return (
        <Modal show={show} onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body><h3>Would you like to adopt {petname}?</h3></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button style={{ backgroundColor: "#AD343E", borderColor: 'black' }} onClick={handleClose}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modals

