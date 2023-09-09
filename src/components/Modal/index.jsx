import React, { useState } from 'react';
import './style.css';

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`modal ${isOpen ? 'open' : 'closed'}`}
      style={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden'
      }}
    >
      {isOpen && (
        <div className="modal_content">
          <span className='modal_close' onClick={closeModal}>
            &times;
          </span>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Modal;

export const ModalHeader = (props) => {
  return (
    <div className="modal_header">
      {props.children}
    </div>
  );
};

export const ModalBody = (props) => {
  return (
    <div className="modal_body">
      {props.children}
    </div>
  );
};
