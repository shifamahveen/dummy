import React from 'react'

class ClassProps extends React.Component {
    render() {
        return <h1>Name: {this.props.name} from {this.props.location}</h1>
    }
}

export default ClassProps;