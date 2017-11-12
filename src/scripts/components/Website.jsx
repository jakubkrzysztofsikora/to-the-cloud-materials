import React from 'react';
import Header from './Header';
import DptoConferencePoster from './DptoConferencePoster';
import Thanks from './Thanks';
import PageContent from './PageContent';

export default class Website extends React.Component {
	render() {
		return <section id="main-content">
			<DptoConferencePoster scrollToElementName="navbar" />
			<Header name="navbar" brand="Materiały dodatkowe" />
			<Thanks />
			<PageContent />
		</section>;
	}
}