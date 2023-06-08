import React, { Component } from 'react';
import "./About.css";
import jay_headshot  from "../assets/jay_headshot.jpg";

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div className="split left">
      <div className="centered">
        <img 
          src = {jay_headshot}
          className="profile_image"
          // Image goes here
          alt="Jay's Headshot"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Jay Esemudje</div>
        <div className="brief_description">
          Hi! I'm Jay, a rising junior at Duke University, studying Electrical and Computer Engineering with a finance minor. I'm working to understand and apply the engineering principles I learn to problems within the financial sphere. When I'm not working, I enjoy watching anime and finding new recipes that I'll likely never get around to making. Fun fact: I was born in Maryland but I grew up in Lagos, Nigeria.
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}