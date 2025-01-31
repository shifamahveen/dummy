import React from 'react'

class State extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Smith',
            age: 40
        }
    }

    updateName = () => {
        this.setState({ 
            username: 'John',
            age: 76
         })
    }

    render() {
        return (
            <>
                <h1>Name: {this.state.username}</h1>
                <h1>Age: {this.state.age}</h1>
                <button onClick={this.updateName}>Change Name</button>
            </>
        )
    }
}

export default State