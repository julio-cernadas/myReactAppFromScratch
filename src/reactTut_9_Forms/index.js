import React from "react";
import ReactDOM from "react-dom";
import Form from './Form';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Form />
            </div>
        )
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="file" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        // console.log();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name:
                    <input type="text" placeholder="enter a phrase" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        console.log("target.name " + target.name);
        console.log("target.checked " + target.checked);
        console.log("target.value " + target.value);
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
            <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
            <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
);

// ReactDOM.render(<input value="hi" />, document.getElementById('root'));

// setTimeout(function () {
//     ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 1000);