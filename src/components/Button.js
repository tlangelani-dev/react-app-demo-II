import React from 'react';
import Heart from './Heart';

class Button extends React.Component {
    render() {
        return <button><Heart /> {this.props.children}</button>;
    }
}

export default Button;
