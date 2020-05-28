import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function DeleteModal(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // let correctTag;
  // if (props.welcomeDisclaimer) {
  //   correctTag = (
  //     <div onClick={handleShow} className="cursor-pointer circle red m-auto d-flex justify-content-center align-items-center text-light">
  //       <i handler="delete" className="fas fa-trash-alt fa-lg"></i>
  //     </div>
  //   );
  // }
  // if (props.destinationItem) {
  //   correctTag = <i className="fas fa-trash-alt icon" onClick={handleShow}></i>;
  //   // correctTag = <img onClick={() => props.handleClickDelete(destination.destinationId)} className="icon" src="./images/trash.png" alt="" />;
  // }

  return (
    <>
      {/* {correctTag} */}
      {/* this.handleClickDelete(destinationInfo.destinationId) */}
      <Modal backdrop='static' className='modal' centered show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">This site is for demonstration purposes only. No real purchases will be made.</Modal.Body>
        <Modal.Footer className="d-flex justify-content-center border-top-0">
          <Button variant="success" onClick={() => {
            handleClose();
            props.modalClicked();
          }}>
            I agree
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
