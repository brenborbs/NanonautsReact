import React, { Component } from 'react'

 class Nav extends Component {
  render() {
    return (
      <header>
        <p><sup>nanonauts</sup></p>
        {/* <h1>About Us</h1> */}
          <nav >
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              
              <li>
                <a href="/our-songs">Our Songs</a>
              </li>
              <li>
                <a href="/see-us-play">See Us Play</a>
              </li>
              <li>
                <a href="/playing-a-concert">Playing A Concert</a>
              </li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default Nav;
