import React, { Component } from 'react';
import SingerList from './singerList';
import Album from './album';
import band from '../../Resources/images/vidar-nordli-mathisen-599293-unsplash.jpg';
import Daniel from '../../Resources/images/austin-neill-222825-unsplash.jpg';
import Sam from '../../Resources/images/slim-emcee-ug-the-poet-truth_from_africa_photography-460877-unsplash.jpg';
import Holly from '../../Resources/images/maaria-lohiya-207499-unsplash.jpg';
import Dervla from '../../Resources/images/neonbrand-350120-unsplash.jpg';

// Passing static data
const nanoData = [
  {
    id: '1',
    name: 'Daniel - Singer extraordinaire',
    img: Daniel,
    desc: "Daniel is the Nanonauts singer. He likes to sing all the time = not just when he's playing with the Nanonauts! His mum and dad say he learned to sing before he learned to talk! "
  },
  {
    id: '2',
    name: 'Sam - One man rhythm section',
    img: Sam,
    desc: "Daniel is the Nanonauts singer. He likes to sing all the time = not just when he's playing with the Nanonauts! His mum and dad say he learned to sing before he learned to talk! "
  },
  {
    id: '3',
    name: 'Holly - If it got strings, she will play it!',
    img: Holly,
    desc: "Daniel is the Nanonauts singer. He likes to sing all the time = not just when he's playing with the Nanonauts! His mum and dad say he learned to sing before he learned to talk! "
  },
  {
    id: '4',
    name: 'Dervla - Keyboard Mastro',
    img: Dervla,
    desc: "Daniel is the Nanonauts singer. He likes to sing all the time = not just when he's playing with the Nanonauts! His mum and dad say he learned to sing before he learned to talk! "
  },
]

 class About extends Component {
  state = {
    nauts: nanoData
  }

  render() {
    return (
      <article>
        <h1>Meet the Nanonauts</h1>
        <p>We are the Nanonauts!</p>
        <p>Our names are Holly, Dervla, Daniel and Sam</p>
        <p><img className="large" src={band} alt="bandPic"/></p>
        <SingerList nauts={this.state.nauts} />
        <aside>
          <Album />
        </aside>
      </article>
    )
  }
}

export default About;
