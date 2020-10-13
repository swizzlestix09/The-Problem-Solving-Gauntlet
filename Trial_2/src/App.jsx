import React, { Component } from 'react';
import Axios from 'axios';
import TextComponent from './TextComponent.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        getTheData();
    }

    getTheData() {

        Axios.get('/thedata')
            .then( res => {

            })
            .catch( err => {

            })
    }

    render() {
        return (
            <div className="textCompContainer">
                <h1 className="textCompHeaderText">This box should have a bunch of users in it</h1>
                <TextComponent users={this.state.users} />
            </div>
        )
    }
}

export default App;

