import React from 'react';

class Widget extends React.Component {
    render() {
        return (
            <section id="widget">
                <input type="text" onChange={this.props.update} />
            </section>
        );
    }
}

export default Widget;
