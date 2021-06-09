import Auth from 'pages/Auth';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BASE_ROUTES } from 'utils/routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={BASE_ROUTES.AUTH}>
          <Auth />
        </Route>
        <Route exact path={BASE_ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
