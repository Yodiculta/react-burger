import React from 'react';
import ReactDOM from 'react-dom';
import productPropTypes from '../../utils/types';

const modalRoot = document.getElementById('modal');
const Modal = (props) => {
  const { children, onClose } = props;

  React.useEffect(() => {
    document.addEventListener('keydown', onClose);
    return () => {
      document.removeEventListener('keydown', onClose);
    }
  })

  return ReactDOM.createPortal(
    <div className="Modal">
      {children}
    </div>,
    modalRoot,
  );
}
Modal.propTypes = {
  data: productPropTypes,
}

export default Modal;
