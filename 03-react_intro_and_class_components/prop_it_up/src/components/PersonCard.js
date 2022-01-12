import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = { () => this.increaseAge()}>Birthday button for {firstName} {lastName} </button>
        </div>;
    }
    increaseAge(){
        this.setState({ age: this.state.age + 1 })
    }
}

export default PersonCard;