import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import bgStyle from './BurgerConstructor.module.css'
import PropTypes from 'prop-types';
import productPropTypes from "../../utils/types";
import Modal from "../modalOverlay/Modal";
import Child from "./ModalOverlay";

const Product = ({ data, type, isLocked, flag, name }) => {
  return (
    <li className={bgStyle.list}>
      {flag && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={name ? name : data.name}
        price={data.price}
        thumbnail={data.image}
      >
      </ConstructorElement>
    </li>
  );
};

Product.propTypes = {
  data: productPropTypes,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  flag: PropTypes.bool,
  name: PropTypes.string
}

const BurgerConstructor = ({ list }) => {
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(1000);

  const showChanger = () => {
    setShow(!show)
  }

  return (
    <div className={bgStyle.main}>

      <ul className={`custom-scroll`}>
        {list.map((prod) => {
          if (prod._id == "60d3b41abdacab0026a733c6") {
            return <Product key={prod._id} type={"top"} data={prod} isLocked={true} flag={false} name="Краторная булка N-200i (верх)" />
          }
        })}
        {list.map((prod) => {
          if (prod.type == "sauce") {
            return <Product key={prod._id} data={prod} isLocked={false} flag={true} />
          }
        })}
        {list.map((prod) => {
          if (prod._id == "60d3b41abdacab0026a733c6")
            return <Product key={prod._id} type={"bottom"} data={prod} isLocked={true} flag={false} name="Краторная булка N-200i (низ)" />
        })}
      </ul>

      <div className={bgStyle.bottom}><div className={bgStyle.price}>{price} <CurrencyIcon /></div>
        <Button type="primary" size="medium" className={bgStyle.but} onClick={showChanger}>
          Оформить заказ
        </Button>

        {show &&
          <div onClick={showChanger} >
            <Modal escFunction={(e)=> {
            if(e.code==="Escape"){
              showChanger();
            console.log("Close it!");
          }}}>
              <Child />
            </Modal>
          </div>}
      </div>

    </div>
  )
}


BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(productPropTypes)
}


export default BurgerConstructor;