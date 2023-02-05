import React from "react";

// Классовый компонент (старый подход)
class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state.count);
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
        console.log(this.state.count);
    }

    render() {
        return (
            <div>
                <h2>{ this.state.count }</h2>
                <button onClick={this.decrement} type="button">Decrement</button>
                <button onClick={this.increment} type="button">Increment</button>
            </div>
        );
    };
};

export default ClassCounter;
