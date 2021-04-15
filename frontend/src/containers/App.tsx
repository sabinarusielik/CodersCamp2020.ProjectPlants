import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Stats from '../components/Stats';
import Profile from '../components/Profile';

import 'semantic-ui-css/semantic.min.css';

const App = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/stats" component={Stats} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
