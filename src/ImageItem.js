import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className="image-item" >
                <img src={this.props.url} alt={this.props.title} />
            </div>
        )
    }
}
