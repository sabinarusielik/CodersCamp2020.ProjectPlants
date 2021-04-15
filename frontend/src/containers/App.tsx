import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import SignupForm from '../components/signup';

const App = (): React.ReactElement => {
    return (
        <div className="App">
            <SignupForm />
        </div>
    );
};

export default App;
