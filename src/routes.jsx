import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListView from './pages/ListView';
import NavBar from './components/NavBar';

const routes = [
  {
    component: Home,
    name: 'Home',
    path: '/',
  },

  {
    component: ListView,
    name: 'ListView',
    path: '/list',
  },
];

const Routes = () => (
  <BrowserRouter>
    <NavBar title='Desafio NPS' routes={routes} />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path} component={component} />
      ))}
    </Switch>
  </BrowserRouter>
);
export default Routes;
