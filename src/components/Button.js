import React from 'react';
import Heart from './Heart';
import './styles/Button.css';

class Button extends React.Component {
    render() {
        return <button><Heart /> {this.props.children}</button>;
    }
}

export default Button;
