import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../../App';
import { Button } from '../Button';
import Signup from '../Signup/Signup';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img className="sign-logo" src="/photos/MusicSign.svg" />
          <img className="text-logo" src="/photos/VerseNation.svg" />
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <Router> */}
        {/* <Route exact path="/" /> */}
        <Link to={'/login'}>
          <Button>Login</Button>
        </Link>
        {/* </Router> */}
      </nav>
    );
  }
}

export default Navbar;
