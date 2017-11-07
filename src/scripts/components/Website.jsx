import React from 'react';
import Header from './Header';
import DptoConferencePoster from './DptoConferencePoster';
import PageContent from './PageContent';

export default class Website extends React.Component {
	render() {
		return <section id="main-content">
			<Header brand="Presentation Materials" />
            <DptoConferencePoster />
            <PageContent />
		</section>;
	}
}