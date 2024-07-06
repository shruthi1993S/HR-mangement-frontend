
// src/components/DeleteCandidate.js

import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const DeleteCandidate = ({ deleteFunction, show, handleClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFunction);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this Candidate?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteCandidate;
