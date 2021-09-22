import React, { Component } from 'react'
import ImageItem from '../ImageItem/ImageItem.js'
import './ImageList.css'

export default class ImageList extends Component {
    render() {
        return (
            <div className="image-list">
                { this.props.images.map(image => <ImageItem {...image} key={image.title}/>) }
            </div>
        )
    }
}
