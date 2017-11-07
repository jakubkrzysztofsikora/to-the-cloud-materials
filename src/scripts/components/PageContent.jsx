import React from 'react';
import ImageBlock from './ImageBlock';
import AzureImg from '../../images/azure-icon.png';
import PowerpointImg from '../../images/powerpoint-icon.jpg';

export default class PageContent extends React.Component {
    render() {
        return <section className="wrap-content">
            <h2>Presentation Materials</h2>
            <ImageBlock bootstrapClass="col-sm-2" image={AzureImg} imageLink="#" imageInfo="Microsoft Azure Docs" />
            <ImageBlock bootstrapClass="col-sm-2" image={AzureImg} imageLink="#" imageInfo="Microsoft Azure Portal" />
            <ImageBlock bootstrapClass="col-sm-2" image={PowerpointImg} imageLink="#" imageInfo="Presentation" />
        </section>
    }
}