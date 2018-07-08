import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">

        <div className="project-sections">
          <h3 className="title-font">About</h3>
          <p className="p-font">I solve problems. As a former Legal Assistant with a passion for technology I decided to shoot for the moon and attend DevBootcamp allowing me to dive deeper into the exciting world of the tech industry. A paralegal quickly learns the value of getting things done with hard deadlines, changing specifications, and unforeseen bumps. These skills serve me well and are completely in step with what it takes to be a good developer (along with grit, which I have in spades). Currently I support the world's 6th largest alcohol distributor as they move headquarters but am seeking a forever job (relatively speaking) where I can contribute and grow with a dynamic team. Check out my latest work history on my <a href="https://www.linkedin.com/in/lorraine-hemenway-00/" target="_blank" className="link-color">Linkedin</a>. When I'm not learning something new, I love to hike, yoga, bike, eat, kayak, look at art or work on my many side projects found on my <a href="https://github.com/flash00" target="_blank" className="link-color">GitHub</a>. Currently, I am looking for a full-stack(or frontend/ backend/ solutions/ sales) role in San Francisco.</p>
        </div>

        <h3 className="title-font">Projects I've worked on:</h3>

        <div className="project-sections">
          <h2 className='subtitle'>Bootup</h2>
          <p className="p-font"><a href="http://dbc-bootup.herokuapp.com/interviews" target="_blank" className="link-color">Bootup</a> Centralized portal for Dev Bootcamp graduates aka "boots". Providing data and resources about tech jobscape and offering a place to share interview experiences, and connect with other developers. As a Software Engineer for Bootup, I designed several aspects of the site including the search feature which I walk through in this <a href="https://www.youtube.com/watch?v=IwfYI6pLuoM" target="_blank" className="link-color">video (to skip introduction start at 0:43)</a>. or as seen below:</p>
          <img className="container about-pic" src={require('./bootup search.png')}/>
          <img className="container about-pic" src={require('./bootup interview.png')}/>
        </div>

        <div className="project-sections">
          <h2 className='subtitle'>RAK Random Acts of Kindness</h2>
          <p className="p-font"><a href="https://foreveraloaner.herokuapp.com/" target="_blank" className="link-color">Forever Aloaner</a> is a full rails web application that allows users to interact, chat, loan, and borrow items from one another. It's like a Craigslist for borrowing things! You can<a href="https://github.com/shannonnolan17/foreveraloaner-rails" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <img className="container about-pic" src={require('./landing-page.png')} />
        </div>

        <div className="project-sections">
          <h2 className='subtitle'>GOOD GRIEF</h2>
          <p className="p-font">Good Grief is a mobile-first web application that strives to assist people move through the five stages of grief after a relationship dissolution. It aims to facilitate the process of healing from a broken heart by providing a collection of resources specifically tailored to each stage, as well as a safe environment to connect with others going through similar experiences. You can<a href="https://github.com/shannonnolan17/good-grief-front" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <img className="container about-pic" src={require('./user_page_1.png')}/>
        </div>
      </div>
    );
  }
}

export default About;