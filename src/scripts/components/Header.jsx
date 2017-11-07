import React from 'react';

export default class Header extends React.Component {
    render() {
        return <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">{this.props.brand}</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a target="_blank" href="http://codesenpai.humanaction.eu">My Blog</a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/krzysztofjakubsikora/">My Linkedin</a></li>
                            <li><a target="_blank" href="http://sikora.humanaction.eu/contact/">Contact</a></li>
                        </ul>
                    </div>
                </nav>;
    }
}