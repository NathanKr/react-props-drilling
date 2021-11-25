import React from 'react';

const CounterButton = ({increment}) => {
    return (
        <button onClick={increment}>Increment</button>
    );
};

export default CounterButton;