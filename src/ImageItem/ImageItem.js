import React, { Component } from 'react';
import './ImageItem.css';

export default class ImageItem extends Component {
    render() {
        return (
            <div className="image-item">
                <img src={this.props.url} alt={this.props.title} className="creature-image"/>
                <p>{this.props.title}</p>
            </div>
        )
    }
}
