import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Navbar from '../components/Navbar';
import Login from '../components/Login';

const App = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
