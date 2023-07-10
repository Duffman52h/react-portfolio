/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import Myself_750 from './images/Myself_750.jpg';

function Header() {
    return (
        <nav class="navbar container navbar-light bg-info">
            <div class="row">
            <div class="col my-auto mx-auto d-block text-center rounded ">
        <h1>Brett Duffield</h1>
        <h3>Backend Web Developer</h3>
        </div>
        <div class="col">
        <img class="rounded mx-auto d-block .img-fluid. max-width: 100% height: auto;" src={Myself_750} alt="EmMyself" width="60%"></img>
        </div>
        </div>
      </nav>
    )
};

export default Header;

/* eslint-disable no-unused-vars */