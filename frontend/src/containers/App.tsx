import * as React from 'react';
import SpeciecContainer from './SpeciesContainer';

const App = (): React.ReactElement => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <SpeciecContainer />
                </p>
            </header>
        </div>
    );
};

export default App;
