import {  Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import  { useState } from 'react'
import bgStyle from './BurgerStyle.module.css'
import { SubTub } from './SubTub'
import PropTypes from 'prop-types';
import productPropTypes from '../../utils/types';
import Modal from "../modalOverlay/Modal";
import Child from './ModalOverlay';

const Product = ({ data }) => {
  const [show, setShow] = useState();

  const image = (
    <img className={bgStyle.img}
      src={
        data.image}
      alt={data.name}
    />
  );
  return (
    <>
      <div className={bgStyle.product} onClick={() => setShow(!show)}>
        {show && <>
          <Modal escFunction={(e)=> {
            if(e.code==="Escape"){
              setShow(!show);
            console.log("Close it!");
          }}}>
            <Child data={data} />
          </Modal></>}
        <div className={bgStyle.counter}><Counter count={21} size="small" /></div>
        <div >{image}</div>
        <div className={bgStyle.price}>{data.price}<CurrencyIcon /></div>
        <div className={bgStyle.name}>{data.name}</div>
      </div>
    </>
  );
};
Product.propTypes = {
  data: productPropTypes
}

const BurgerIngredients = ({ data }) => {
  return (
    <div className={bgStyle.main}>
      <div className={bgStyle.header}>

        <h1>Соберите бургер</h1>

        <SubTub />
      </div>
      <ul className={'custom-scroll'}>
        <li className={bgStyle.section} key={1}>
          <h1 id='one'>Булки</h1>
          {data.map((prod) => {
            if (prod.type == "bun") {
              return <Product key={prod._id} data={prod} />
            }
          })}
        </li>
        <li className={bgStyle.section} key={2}>
          <h1 id='two'>Соусы</h1>
          {data.map((prod) => {
            if (prod.type == "sauce") {
              return <Product key={prod._id} data={prod} />
            }
          })}
        </li>
        <li className={bgStyle.section} key={3}>
          <h1 id='three'>Начинки</h1>
          {data.map((prod) => {
            if (prod.type == "main") {
              return <Product key={prod._id} data={prod} />
            }
          })}
        </li>
      </ul>
    </div>
  )

}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(productPropTypes.isRequired).isRequired
}
export default BurgerIngredients;