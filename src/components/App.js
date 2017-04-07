import React from 'react';
import Button from './Button';
import Widget from './Widget';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            typed: 'Nothing!',
            services: 'Online Clothing!'
        };
    }

    update(e) {
        this.setState({ typed: e.target.value });
    }

    render() {
        return (
            <section id="wrapper">
                <h1>{this.props.name}</h1>
                <p>{this.state.services}</p>
                <Button>Checkout</Button>
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <pre>You typed: {this.state.typed}</pre>
            </section>
        );
    }
}

// expected prop types
App.propTypes = {
    name: React.PropTypes.string,
    users: React.PropTypes.number.isRequired
};

// default prop values
App.defaultProps = {
    name: 'Jane Doe Inc.'
};

export default App;
