import "@babel/polyfill";
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SpinnerDotted } from 'spinners-react';
import { CSSProperties } from 'react';
import MainPage from '../main-page/main-page';
import { getLoadingFlag } from '../../store/selectors';
import UserPage from '../user-page/user-page';
import { AppRoute } from "../../consts";
import NotFoundPage from "../not-found-page/not-found-page";
import "../../styles/app.scss";

function App(): JSX.Element {

  const isLoading = useSelector(getLoadingFlag);

  if (isLoading) {
    const spinnerStyles: CSSProperties = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <SpinnerDotted color='#4481c3' style={spinnerStyles} size={100}/>
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <MainPage />
      </Route>
      <Route exact path={AppRoute.User}>
        <UserPage />
      </Route>
       <Route >
        <NotFoundPage />
      </Route>
      </Switch>
  );
}

export default App;
