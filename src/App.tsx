import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './route-config';
import configureValidations from './Validations';
import './App.css';
import Menu from './Menu';

configureValidations();

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <div className="container">
                <Switch>
                    {
                        routes.map(route =>
                            <Route key={route.path} path={route.path} exact={route.exact}>
                                <route.component />
                            </Route>)
                    }
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
