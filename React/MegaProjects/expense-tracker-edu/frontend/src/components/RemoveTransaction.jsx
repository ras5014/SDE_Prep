import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RemoveTransaction = ({ transactionType, transaction, onRemove }) => {
  const navigate = useNavigate();
  const [showModalConfirmation, setShowModalConfirmation] = useState(false);
  const handleRemove = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/deleteTransaction/${transactionType}/${transaction.formId}`
      );
      if (response.data.success) {
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };
  return (
    <>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => setShowModalConfirmation(true)}
      >
        <i className="bi bi-trash3-fill"></i>
      </button>

      <Modal
        show={showModalConfirmation}
        onHide={() => setShowModalConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this {transactionType}?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-success"
            onClick={() => setShowModalConfirmation(false)}
          >
            <i className="bi bi-x-square me-2"></i>Close
          </Button>
          <Button variant="outline-danger" onClick={handleRemove}>
            <i className="bi bi-trash3-fill me-2"></i>Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RemoveTransaction;
