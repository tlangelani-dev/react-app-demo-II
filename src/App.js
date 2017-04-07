import React from 'react';
import Widget from './Widget';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            typed: '',
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
                <Widget update={this.update.bind(this)} />
                <pre>{this.state.typed}</pre>
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
