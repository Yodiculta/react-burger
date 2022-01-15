import { Button} from '@ya.praktikum/react-developer-burger-ui-components';
import bgStyle from './BurgerStyle.module.css'
import productPropTypes from '../../utils/types';

function Child({ data }) {
    const image = (
      <img className={bgStyle.img2}
        src={
          data.image}
        alt={data.name}
      />
    );
    // Событие клика на этой кнопке будет всплывать вверх к родителю,
    // так как здесь не определён атрибут 'onClick' 
    return (
      <div className={bgStyle.overlay}>
        <div className={bgStyle.details}>
          <div className={bgStyle.child}>
            <h1>Детали ингредиента</h1>
            <Button type="secondary" size="small">Х</Button>
          </div>
          <div >{image}</div>
          <div className={bgStyle.name2}>{data.name}</div>
          <ul className={bgStyle.energy}>
            <li style={{ width: '130px' }}>
              <h2>Калории, ккал</h2>
              <p>{data.calories}</p>
            </li>
            <li>
              <h2>Белки, г</h2>
              <p>{data.proteins}</p>
            </li><li>
              <h2>Жиры, г</h2>
              <p>{data.fat}</p>
            </li><li>
              <h2>Углеводы, г</h2>
              <p>{data.carbohydrates}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  Child.propTypes = {
    data: productPropTypes
  }
  export default Child;