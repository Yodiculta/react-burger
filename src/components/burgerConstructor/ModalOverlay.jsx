import React from 'react';
import bgStyle from './BurgerConstructor.module.css';
import img from '../../images/done.png';
import PropTypes from 'prop-types';
import closeButton from '../../images/icon.png'

function Child({ onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <section className={bgStyle.overlay}>
      <div className={bgStyle.details} onClick={handleSubmit}>
        <img src={closeButton} onClick={onClose} className={bgStyle.closeIco} alt="X" />
        <div className={bgStyle.content}>
          <p className={`text text_type_digits-large ${bgStyle.num}`}>123456</p>
          <h1>идентификатор заказа</h1>
          <img src={img} alt="error" className={bgStyle.image} />
          <p>Ваш заказ начали готовить</p>
          <p className={bgStyle.disabled}>Дождитесь готовности на орбитальной станции</p>
        </div>
      </div>
    </section>
  );
}
Child.propTypes = {
  onClose: PropTypes.func.isRequired,
}
export default Child;
