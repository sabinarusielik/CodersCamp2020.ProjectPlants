import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Stats from '../components/Stats';

const App = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/stats" component={Stats} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
