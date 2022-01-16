import {
  BurgerIcon, ListIcon, Logo, ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import appHeader from './AppHeader.module.css'

function AppHeader() {
  return (
    <div className={appHeader.container}>
      <div className={appHeader.item}>
        <BurgerIcon />
        {' '}
        <h3>Конструктор</h3>
        {' '}
      </div>
      <div className={appHeader.item}>
        <ListIcon type="secondary" />
        <h3 className={appHeader.disabled}>Лента заказов</h3>
      </div>
      <div><Logo /></div>
      <div className={appHeader.item}>
        <ProfileIcon type="secondary" />
        <h3 className={appHeader.disabled}>Личный кабинет</h3>
      </div>
    </div>
  )
}

export default AppHeader;
