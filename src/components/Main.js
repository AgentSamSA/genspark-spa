import React, { Component } from "react";
import {
  Route,
  NavLink,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import Home from "./Home";
import AboutMe from "./About Me";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>All About Myself</h1>
        <ul className="header">
          <li><NavLink end to="/">Home</NavLink></li>
          <li><NavLink to="/about-me">About Me</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Main;