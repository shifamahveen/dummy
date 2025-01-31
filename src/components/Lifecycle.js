import React from 'react'

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    increment = () => {
        this.setState({ count: this.state.count+1 })
    }

    componentDidMount() {
        console.log("Component added to DOM");        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component removed from DOM");
    }

    render() {
        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}

export default Lifecycle