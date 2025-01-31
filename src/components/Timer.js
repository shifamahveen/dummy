import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    tick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    stopTimer = () => {
        clearInterval(this.id);
    }

    // start timer, reset timer
    render() {
        return (
            <>
                <h1>Timer: {this.state.count}</h1>
                <button className='btn btn-danger' onClick={this.stopTimer}>Stop Timer</button>
            </>
        )
    }
}

export default Timer;