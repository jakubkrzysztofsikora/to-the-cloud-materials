import React from 'react';
import ScrollDownButton from './ScrollDownButton';

export default class ConferencePoster extends React.Component {
    render() {
        const posterStyle = {
            backgroundImage: "url(" + this.props.image + ")"
        }

		return <section id="conference-poster" className="parallax" style={posterStyle}>
			{this.props.children}
			<ScrollDownButton elementName={this.props.scrollToElementName} />
		</section>;
	}
}