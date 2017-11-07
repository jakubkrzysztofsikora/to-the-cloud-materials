import React from 'react';

export default class ConferencePoster extends React.Component {
    render() {
        const posterStyle = {
            backgroundImage: "url(" + this.props.image + ")"
        }

        return <section id="conference-poster" className="parallax" style={posterStyle} />
    }
}