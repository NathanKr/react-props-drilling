import  { useState } from 'react';
import CounterButton from './CounterButton';
import CounterMessage from './CounterMessage';

const CounterPropsDrilling = () => {
    const [count,setCount] = useState(0);
    const increment = () => setCount(count+1);
    return (
        <div>
            <h5>Counter Props Drilling</h5>
            <CounterButton clickHandler={increment}/>
            <CounterMessage count = {count}/>
        </div>
    );
};

export default CounterPropsDrilling;