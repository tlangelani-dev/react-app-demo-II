import React from 'react';

class App extends React.Component {
    render() {
        return <h1>{this.props.name}</h1>;
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
