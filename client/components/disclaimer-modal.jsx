import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function WelcomeModal(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>

      <Modal backdrop='static' className='modal' centered show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center"><p>
          This site is for demonstration purposes only. No real purchases will be made. All assets were gathered from: <a href="http://www.morningsunherbfarm.com" target="_blank" rel="noopener noreferrer">Morning Sun Herb Farm</a>, <a href="https://succulentmarket.com/" target="_blank" rel="noopener noreferrer">Succulent Market</a>, <a href="https://en.wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>
        </p>
        </Modal.Body>
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
