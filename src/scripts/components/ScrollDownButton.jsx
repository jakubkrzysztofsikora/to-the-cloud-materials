import React from 'react';
import { scroller } from 'react-scroll';

export default class ScrollDownButton extends React.Component {
	render() {
		return <div className="scroll-down-button" onClick={() => scroller.scrollTo(this.props.elementName, {
			duration: 1500,
			delay: 100,
			smooth: true
		})}><span />Scroll</div>;
	}
}