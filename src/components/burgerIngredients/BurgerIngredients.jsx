/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import bgStyle from './BurgerStyle.module.css'
import productPropTypes from '../../utils/types';
import Modal from '../modalOverlay/ModalPortal';
import Child from './ModalOverlay';

function Product({ productDetails, onOpen }) {
  const image = (
    <img
      className={bgStyle.img}
      src={
        productDetails.image
      }
      alt={productDetails.name}
    />
  );

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={bgStyle.product}
      onClick={() => onOpen(productDetails)}
    >

      <div className={bgStyle.counter}><Counter count={21} size="small" /></div>
      <div>{image}</div>
      <div className={bgStyle.price}>
        {productDetails.price}
        <CurrencyIcon />
      </div>
      <div className={bgStyle.name}>{productDetails.name}</div>
    </div>
  );
}
Product.propTypes = {
  productDetails: productPropTypes.isRequired,
}

function SubTub() {
  const [current, setCurrent] = useState('bun');
  const handleClick = (prop) => {
    setCurrent(prop);
    document.getElementById(prop).scrollIntoView();
  }
  return (
    <div className={bgStyle.tabs}>
      <Tab value="bun" active={current === 'bun'} onClick={handleClick}>Булки</Tab>
      <Tab value="sauce" active={current === 'sauce'} onClick={handleClick}>Соусы</Tab>
      <Tab value="main" active={current === 'main'} onClick={handleClick}>Начинки</Tab>
    </div>
  );
}

function BurgerIngredients({ bgCatalog }) {
  const [isShow, setIsShow] = useState(false);
  const [productData, setProductData] = useState(null);
  const onOpen = (prod) => {
    if (!isShow) {
      setProductData(prod);
      setIsShow(true);
    }
  }
  const onClose = (e) => {
    e.preventDefault();
    if (isShow) {
      setProductData(null);
      setIsShow(false);
    }
  }

  return (
    <div className={bgStyle.main}>
      <div className={bgStyle.header}>

        <h1>Соберите бургер</h1>

        <SubTub />
      </div>
      <ul className="custom-scroll">
        <li className={bgStyle.section} key={1}>
          <h1 id="bun">Булки</h1>
          {bgCatalog.map((prod) => {
            if (prod.type === 'bun') {
              // eslint-disable-next-line no-underscore-dangle
              return <Product key={prod._id} productDetails={prod} onOpen={onOpen} />
            }
            return false
          })}
        </li>
        <li className={bgStyle.section} key={2}>
          <h1 id="sauce">Соусы</h1>
          {bgCatalog.map((prod) => {
            if (prod.type === 'sauce') {
              // eslint-disable-next-line no-underscore-dangle
              return <Product key={prod._id} productDetails={prod} onOpen={onOpen} />
            }
            return false
          })}
        </li>
        <li className={bgStyle.section} key={3}>
          <h1 id="main">Начинки</h1>
          {bgCatalog.map((prod) => {
            if (prod.type === 'main') {
              // eslint-disable-next-line no-underscore-dangle
              return <Product key={prod._id} productDetails={prod} onOpen={onOpen} />
            }
            return false
          })}
        </li>
      </ul>
      {isShow && productData && (
        <Modal onClose={onClose}>
          <Child data={productData} onClose={onClose} />
        </Modal>
      )}
    </div>
  )
}

BurgerIngredients.propTypes = {
  bgCatalog: PropTypes.arrayOf(productPropTypes.isRequired).isRequired,
}
export default BurgerIngredients;
