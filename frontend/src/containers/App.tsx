import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import HomePage from './HomePage';
// import WelcomePage from './WelcomePage';

const App = (): React.ReactElement => {
    return (
        <div className="App">
            <HomePage />
        </div>
    );
};

export default App;
