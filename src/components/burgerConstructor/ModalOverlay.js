import productPropTypes from "../../utils/types";
import bgStyle from './BurgerConstructor.module.css';
import img from '../../images/done.png';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

  function Child() {
    // Событие клика на этой кнопке будет всплывать вверх к родителю,
    // так как здесь не определён атрибут 'onClick' 
    return (
      <section className={bgStyle.overlay} >
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
  Child.propTypes = {
    data: productPropTypes
  }
  
  export default Child;