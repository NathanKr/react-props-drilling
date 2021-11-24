import  { useState } from 'react';

const CounterSimple = () => {
    const [count,setCount] = useState(0);
    const increment = () => setCount(count+1);
    return (
        <div>
            <h5>Counter Simple</h5>
            <button onClick={increment}>Increment</button>
            <p>count : {count}</p>
        </div>
    );
};

export default CounterSimple;