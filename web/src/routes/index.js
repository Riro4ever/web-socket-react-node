import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/App/App';
import Login from '../pages/Login/Login';
import Page404 from '../pages/Page404/Page404';

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/login" component={Login} />
    
    <Route path='*' component={Page404} />{/* O que não foi definido até o fim das rotas é 404 */}
  </Switch>
);

export default Routes;