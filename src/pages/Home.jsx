import React from 'react';
import logo from '../image.svg';
import { GiPartyPopper } from 'react-icons/gi'
import '../App.css';

  import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="Text-Area">

      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Imagine if <br></br><span>Snapchat</span> <br></br> had events.
      </h1>
      <h2>Easily host and share events with your friends <br></br> across any social media.</h2>

      <Link to="/create" className="btn1"> <GiPartyPopper />Create my event</Link>
    </div>
  )
}

export default Home;