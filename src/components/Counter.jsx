import React, { useState } from 'react'

// Функциональный компонент (хороший подход)
const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
        console.log(count);
    }

    function decrement() {
        setCount(count - 1)
        console.log(count);
    }

    return (
        <div>
            <h2>{ count }</h2>
            <button onClick={decrement} type="button">Decrement</button>
            <button onClick={increment} type="button">Increment</button>
        </div>
    )
};

export default Counter;
