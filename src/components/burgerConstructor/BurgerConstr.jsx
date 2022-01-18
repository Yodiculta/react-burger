/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  Button, ConstructorElement, CurrencyIcon, DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bgStyle from './BurgerConstructor.module.css'
import productPropTypes from '../../utils/types';
import Modal from '../modalOverlay/ModalPortal';
import Child from './ModalOverlay';

function Product({
  productDetails, type, isLocked, name,
}) {
  return (
    <li className={bgStyle.list}>
      {!isLocked && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={name || productDetails.name}
        price={productDetails.price}
        thumbnail={productDetails.image}
      />
    </li>
  );
}

Product.propTypes = {
  productDetails: productPropTypes.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  name: PropTypes.string,
}
Product.defaultProps = {
  type: 'middle',
  isLocked: false,
  name: null,
};

function BurgerConstructor({ bgCatalog }) {
  const [isShow, setIsShow] = useState(false);
  const price = 1000;

  const showChanger = () => {
    setIsShow(!isShow)
  }

  const onClose = (e) => {
    e.preventDefault();
    if (isShow) {
      setIsShow(false);
    }
  }

  return (
    <div className={bgStyle.main}>
      {bgCatalog.map((prod) => {
        // eslint-disable-next-line no-underscore-dangle
        if (prod._id === '60d3b41abdacab0026a733c6') {
          // eslint-disable-next-line no-underscore-dangle
          return <Product key={prod._id} type="top" productDetails={prod} isLocked name="Краторная булка N-200i (верх)" />
        }
        return false
      })}

      <ul className="custom-scroll">
        {bgCatalog.map((prod) => {
          if ((prod.type === 'sauce') || (prod.type === 'main')) {
            // eslint-disable-next-line no-underscore-dangle
            return <Product key={prod._id} productDetails={prod} />
          }
          return false
        })}
      </ul>
      {bgCatalog.map((prod) => {
        // eslint-disable-next-line no-underscore-dangle
        if (prod._id === '60d3b41abdacab0026a733c6') return <Product key={prod._id} type="bottom" productDetails={prod} isLocked name="Краторная булка N-200i (низ)" />
        return false
      })}
      <div className={bgStyle.bottom}>
        <div className={bgStyle.price}>
          {price}
          {' '}
          <CurrencyIcon />
        </div>
        <Button type="primary" size="medium" className={bgStyle.but} onClick={showChanger}>
          Оформить заказ
        </Button>

        {isShow
          && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div onClick={showChanger}>
              <Modal onClose={onClose}>
                <Child onClose={onClose} />
              </Modal>
            </div>
          )}
      </div>

    </div>
  )
}

BurgerConstructor.propTypes = {
  bgCatalog: PropTypes.arrayOf(productPropTypes).isRequired,
}

export default BurgerConstructor;
