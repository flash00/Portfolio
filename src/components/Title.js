import React, { Component } from 'react';
import '../Title.css';


class Title extends Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <h1 className="title">Hello, my name is Lorraine. I am a Software Engineer and Developer living in the San Francisco Bay Area.</h1>
        </div>
        <div className="container-flex">
          <img className="title-pic" src={require('./hand sun water.jpg')} alt="Photo by Lukas on Pexels"/>
        </div>
      </div>
    );
  }
}

export default Title;