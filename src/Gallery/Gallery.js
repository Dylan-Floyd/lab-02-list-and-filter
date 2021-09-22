import React from 'react';
import './Gallery.css';
import images from '../data.js';
import ImageList from '../ImageList/ImageList.js';
import Dropdown from '../components/Dropdown.js';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            horns: -1
        }
    }

    handleKeywordChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    handleHornCountChange = (e) => {
        this.setState({
            horns: e.target.value === '' ? -1 : Number(e.target.value)
        })
    }

    render() {
        const uniqueKeywords = [...new Set(images.map(image => image.keyword))];
        const uniqueHornCounts = [...new Set(images.map(image => image.horns))];

        const filteredImages = images
            .filter(image => !this.state.keyword || (this.state.keyword === image.keyword))
            .filter(image => this.state.horns < 0 || (this.state.horns === image.horns));
        return (
            <div className="gallery-div">
                <h2>Creatures With Horns</h2>
                
                <div>
                    Select a Type:
                    <Dropdown optionList={uniqueKeywords} changeHandler={this.handleKeywordChange} />

                    Select a Horn Count:
                    <Dropdown optionList={uniqueHornCounts} changeHandler={this.handleHornCountChange} />
                </div>

                <ImageList images={filteredImages} />
            </div>
        );
    }
}
