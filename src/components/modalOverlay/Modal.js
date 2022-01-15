import React from 'react';
import productPropTypes from "../../utils/types";
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal=(props)=> {
  const el = document.createElement('div');
  const {escFunction}= props;

  React.useEffect(()=>
  {
    document.addEventListener("keydown", escFunction);
    modalRoot.appendChild(el);
    return ()=>
    {
      document.removeEventListener("keydown", escFunction);
      modalRoot.removeChild(el);
    }
  })

    return ReactDOM.createPortal(
      props.children,
      el
    );
  
}
Modal.propTypes = {
    data: productPropTypes
  }
  
  export default Modal;