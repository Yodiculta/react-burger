import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import BurgerConstructor from '../burgerConstructor/BurgerConstr';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import { data } from '../../utils/data'

import bgStyle from './App.module.css'

function App() {

   return (
      <div >
         <AppHeader />
         <div className={bgStyle.content}>

         <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
         </div>
      </div>
   );
}

export default App;
