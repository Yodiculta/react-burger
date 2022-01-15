import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import BurgerConstructor from '../burgerConstructor/BurgerConstr';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';

import bgStyle from './App.module.css'

function App() {
   const [state, setState] = React.useState({ 
      
      list: [],
      isLoading: false,
      hasError:false
      })

   const url="https://norma.nomoreparties.space/api/ingredients"

     React.useEffect(()=>{
       const getData = async() => {
        setState({ ...state, hasError: false, isLoading: true });
        fetch(url)
          .then(res => res.json())
          .then(req => setState({ ...state, list:req.data, isLoading: false }))
          .catch(e => {
            setState({ ...state, hasError: true, isLoading: false });
          });
      };
       getData();
       console.log(state.list);
       console.log(typeof(state.list))
      }, [])

   return (
      <div >
         <AppHeader />
         <div className={bgStyle.content}>
         {!state.hasError&&state.list&&<BurgerIngredients data={state.list} />}
            {<BurgerConstructor list={state.list} />}
         </div>
      </div>
   );
}

export default App;
