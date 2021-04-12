import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

const App = (): React.ReactElement => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
            <Button primary content="Semantic works!" />
        </div>
    );
};

export default App;
