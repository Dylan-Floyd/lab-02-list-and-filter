import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        const filteredImages = this.props.images
            .filter(image => !this.props.type || (this.props.type === image.keyword))
            .filter(image => this.props.horns < 0 || (this.props.horns === image.horns))
            .filter(image => this.props.hairy === 'any' || (this.props.hairy === image.hairy));
        return (
            <div>
                { filteredImages.map(image => <ImageItem {...image} key={image.title}/>) }
            </div>
        )
    }
}
