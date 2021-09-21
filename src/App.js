import './App.css';
import images from './data.js';
import ImageList from './ImageList.js';

function App() {
    return (
        <div className="App">
            <ImageList images={images} />
        </div>
    );
}

export default App;
