import React, { Component } from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 'Jordan Belfort'
        }
    }

    getData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
                data: 'Hello WallStreet'
            })
        }, 1000)
    }

    componentWillMount() {
        console.log('First this called');
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default App;