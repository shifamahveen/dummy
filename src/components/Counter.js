import React from 'react'

class Counter extends React.Component {
    constructor(){
        super();
        this.state = { count: 0 }
    }

    render() {
        return (
            <>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary"
                onClick={() => this.setState({ count: this.state.count -1 })} >-</button>
                <span className='p-2'>{this.state.count}</span>
                <button type="button" class="btn btn-primary"
                onClick={() => this.setState({ count: this.state.count +1}) }>+</button>
            </div>
            </>
        )
    }
}

export default Counter