import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">

        <div className="project-sections">
          <h3 className="title-font">About</h3>
          <p className="p-font">I solve problems. As a former Legal Assistant with a passion for technology I decided to shoot for the moon and attend Dev Bootcamp allowing me to dive deeper into the exciting world of the tech industry. A paralegal quickly learns the value of getting things done with hard deadlines, changing specifications, and unforeseen challenges. These skills serve me well and are completely in step with what it takes to be a good developer (along with grit, which I have in spades). Currently I support the world's 6th largest alcohol distributor as they move headquarters but I am seeking a forever job (relatively speaking) where I can contribute and grow with a dynamic team. Check out my latest work history on my <a href="https://www.linkedin.com/in/lorraine-hemenway-00/" target="_blank" className="link-color">LinkedIn</a>. When I'm not learning something new, I love to hike, yoga, bike, eat, kayak, look at art or work on my many side projects found on my <a href="https://github.com/flash00" target="_blank" className="link-color">GitHub</a>. Currently, I am looking for a full-stack (or frontend/ backend/ solutions/ sales) role in San Francisco.</p>
        </div>

        <h3 className="title-font">Projects I've worked on:</h3>

        <div className="project-sections">
          <h2 className='subtitle'>Bootup</h2>
          <p className="p-font"><a href="http://dbc-bootup.herokuapp.com/interviews" target="_blank" className="link-color">Bootup</a> Centralized portal for Dev Bootcamp graduates aka "boots". Providing data and resources about tech jobscape and offering a place to share interview experiences and connect with other developers. A mobile first app design whose tech stack includes Ruby on Rails backend, React frontend, PostgreSQL, deployed on Heroku. As a Software Engineer for Bootup, I designed several aspects of the site including the search feature which I walk through in this <a href="https://www.youtube.com/watch?v=IwfYI6pLuoM" target="_blank" className="link-color">video </a> (to skip introduction start at 0:43) or as seen below:</p>
          <img className="container about-pic" src={require('./bootup search.png')}/>
          <img className="container about-pic" src={require('./bootup interview.png')}/>
        </div>

        <div className="project-sections">
          <h2 className='subtitle'>Event_4cast</h2>
          <p className="p-font"><a href="http://unsuitable-sock.surge.sh/" target="_blank" className="link-color">Event_4cast </a>
          I built and presented this app to a group of developers at Eventbrite. Use it to easily check the weather forecast for your event by searching a city name. The app searches local events or weather forecast using React.js, Eventbrite API, Openweathermap API, and is deployed on Surge! ☔ You can<a href="https://github.com/flash00/Event_4cast" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <p><img className="container about-pic" src={require('./event4cast home.png')}/></p>
          <p><img className="container about-pic" src={require('./event4cast forecast.png')}/></p>
          <img className="container about-pic" src={require('./event4cast event.png')}/>
        </div>

        <div className="project-sections">
          <h2 className='subtitle'>RAK Random Acts of Kindness</h2>
          <p className="p-font"><a href="https://foreveraloaner.herokuapp.com/" target="_blank" className="link-color">RAK</a> Random Acts of Kindness (RAK) is a mobile-first web app where trusted organizations and charities can create wish lists of items for prospective donors. Each year charities receive donations that do not meet their specific needs or campaign goals, resulting in millions of dollars worth of goods going to waste each year (the disaster after the disaster). Fundamentally, RAK's goal is to streamline the process of donating goods and minimize waste. Our team used scrum agile development process to implement our tech stack of Ruby on Rails backend and React.js frontend. You can<a href="https://github.com/flash00/RAK-Frontend" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <img className="container about-pic" src={require('./RAK.png')} />
        </div>
      </div>
    );
  }
}

export default About;