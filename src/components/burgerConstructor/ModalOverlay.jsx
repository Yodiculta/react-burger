import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import bgStyle from './BurgerConstructor.module.css';
import img from '../../images/done.png';

function Child() {
  return (
    <section className={bgStyle.overlay}>
      <div className={bgStyle.details}>
        <Button type="secondary" size="small">Х</Button>
        <p className={`text text_type_digits-large ${bgStyle.num}`}>123456</p>
        <h1>Идентификатор заказа</h1>
        <img src={img} alt="error" />
        <p>Ваш заказ начали готовить</p>
        <p className={bgStyle.disabled}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </section>
  );
}

export default Child;
