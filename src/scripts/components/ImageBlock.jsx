import React from 'react';

export default class ImageBlock extends React.Component {
    render() {
        return <div className={"image-block " + this.props.bootstrapClass} style={{
            backgroundImage: "url(" + this.props.image + ")",

        }}>
            <a href={this.props.imageLink} target="_blank"><p>{this.props.imageInfo}</p></a>
        </div>
    }
}