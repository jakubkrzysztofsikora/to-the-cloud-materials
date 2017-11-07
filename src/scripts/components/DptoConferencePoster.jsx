import React from 'react';
import ConferencePoster from './ConferencePoster';
import DptoPoster from '../../images/dpto-poster.png';

export default class DptoConferencePoster extends React.Component {
    render() {
        return <ConferencePoster image={DptoPoster} />
    }
}