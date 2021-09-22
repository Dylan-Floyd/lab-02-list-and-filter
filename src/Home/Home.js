import React from 'react';
import './Home.css';

export default class App extends React.Component {
  render() {
    return (
        <div className="home-div">
            <h2 className="home-h2">Welcome to:</h2>
            <h1 className="home-h1">Creatures With Horns</h1>
            <p>Enter our immersive gallery to view a multitude of creatures with horns. Our advanced filtering algorithms allows you to tailor your viewing experince to your hearts desires.</p>
        </div>
    );
  }
}
