import React from 'react';
import './App.css';
import images from './data.js';
import ImageList from './ImageList.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            horns: -1,
            hairy: 'any'
        }
    }

    handleTypeChange = (e) => {
        this.setState({
            type: e.target.value
        })
    }

    handleHornCountChange = (e) => {
        this.setState({
            horns: e.target.value === '' ? -1 : Number(e.target.value)
        })
    }

    handleHairyChange = (e) => {
        this.setState({
            hairy: e.target.value === 'any' ? 'any' : Boolean(e.target.value) 
        })
    }

    render() {
        const uniqueKeywords = [...new Set(images.map(image => image.keyword))];
        const uniqueHornCounts = [...new Set(images.map(image => image.horns))];
        return (
            <div className="App">
                <h2>Creatures With Horns</h2>

                Select a Type:
                <select onChange={ this.handleTypeChange }>
                    <option value="">All</option>
                    { uniqueKeywords.map(keyword => <option value={keyword} key={keyword}>{keyword}</option>) }
                </select>

                Select a Horn Count:
                <select onChange={ this.handleHornCountChange }>
                    <option value="">Any</option>
                    { uniqueHornCounts.map(horns => <option value={horns} key={horns}>{horns}</option>) }
                </select>

                Do you prefer hairy creatures?
                <select onChange={ this.handleHairyChange }>
                    <option value="any">No Preference</option>
                    <option value="true">Yes</option>
                    <option value="">No</option>
                </select>

                <ImageList images={images} {...this.state}/>
            </div>
        );
    }
}
