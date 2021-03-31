import React from 'react';
import ReactDOM from 'react-dom';

const Species = (): React.ReactElement => {
    return (
        <div>
            <div>species text2</div>
            <div>{showAge()}</div>
        </div>
    );
};
const age = 44;

const showAge = () => {
    return <h1> {age}</h1>;
};

export default Species;
