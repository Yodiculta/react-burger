import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import BurgerConstructor from '../burgerConstructor/BurgerConstr';
import BurgerIngredients from '../burgerIngredients/BurgerIngredients';
import bgStyle from './App.module.css'

const INGREDIENTS_URL = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
  const [apiRes, setApiRes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      fetch(INGREDIENTS_URL)
        .then((res) => {
          if (!res.ok) throw new Error('Some error with fetch');
          else return res.json()
        })
        .then((req) => {
          setApiRes(req.data);
          setIsLoading(false)
        })
        .catch((e) => {
          setHasError(true);
          setIsLoading(false);
          return e;
        });
    };
    getData();
  }, [])

  return (
    <div>
      <AppHeader />
      <div className={bgStyle.content}>
        {!hasError && !isLoading && apiRes && (
          <>
            <BurgerIngredients bgCatalog={apiRes} />
            <BurgerConstructor bgCatalog={apiRes} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
