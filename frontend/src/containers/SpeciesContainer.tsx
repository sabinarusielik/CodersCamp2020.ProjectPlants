import * as React from 'react';
import Species from '../components/Species';

const SpeciecContainer = (): React.ReactElement => {
    return (
        <div className="SpeciecContainer">
            <header className="SpeciecContainer-header">
                <p>
                    <Species />
                </p>
            </header>
        </div>
    );
};

export default SpeciecContainer;
