import React, { useState } from "react";

function App() {
    const [likes, setLikes] = useState(0);

    function increment() {
        setLikes(likes + 1)
        console.log(likes);
    }

    function decrement() {
        setLikes(likes - 1)
        console.log(likes);
    }


    return (
        <div className="App">
            <h1>{ likes }</h1>
            <button onClick={decrement} type="button">Decrement</button>
            <button onClick={increment} type="button">Increment</button>
        </div>
    );
}

export default App;
