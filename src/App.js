import React from 'react';
import './App.css';
import images from './data.js';
import ImageList from './ImageList.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    handleSelectChange = (e) => {
        console.log(e.target.value);
        this.setState({
            keyword: e.target.value
        })
    }

    render() {
        const filteredImages = images.filter(image => !this.state.keyword || (this.state.keyword === image.keyword))
        return (
            <div className="App">
                Select a Type:
                <select onChange={ this.handleSelectChange }>
                    <option value="">All</option>
                    <option value="narwhal">narwhal</option>
                    <option value="rhino">rhino</option>
                </select>
                <ImageList images={filteredImages} />
            </div>
        );
    }
}
