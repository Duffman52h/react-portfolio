/* eslint-disable no-unused-vars */
import React from 'react';
import './Main.css'
import Tyrell_County from './images/Tyrell_County.PNG'
import Vicious_Cycles from './images/Vicious_Cycles.PNG'
import pleasure_island from './images/pleasure_island.PNG'


function Main() {
    return (
        <body class="container bg-light border" >
    <div class='row bg-info mt-3'>
    <h2 class='col my-auto mx-auto d-block text-center rounded'>About me</h2>
    </div>
    <div class='row'>
        <p class='my-auto mx-auto d-block text-center rounded'>
        Hello! My name is Brett Duffield and I am an Air Force Veteran Learning programming and Web Development. Currently I am in my Second year at Wake Technical Community college so I am still very early in my journey but I am looking forward to growing and learning in hopes of making this a career. I have skills in both front end and back end development though I much prefer to work on the nuts and bolts of the site rather than the looks. 
        </p>
    </div>

    <div class='row bg-info mt-3'>
    <h2 class='col my-auto mx-auto d-block text-center rounded'>Skills</h2>
    </div>
    <div class='row'>
        <div class='col'></div>
        <ul class='col my-auto mx-auto d-block text-center list-unstyled'>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>SQL</li>
        </ul>
        <div class='col'></div>
        <ul class='col my-auto mx-auto d-block text-center list-unstyled'>
            <li>Javascript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
        </ul>
        <div class='col'></div>
    </div>

    <div class='row bg-info mt-3'>
    <h2 class='col my-auto mx-auto d-block text-center rounded'>Experience</h2>
    </div>
    <div class='row'>
        <p class='my-auto mx-auto d-block text-center rounded'>
         During my time in the Air force I gained alot of leadership and management skills that can be applied to any work. I have spent the past year and a half taking classes at Wake Technical Community College towards an associates degree in Web Development. I am hoping ot graduate in spring of 2024.
        </p>
    </div>

    <div class='row bg-info mt-3'>
    <h2 class='col my-auto mx-auto d-block text-center rounded'>Projects</h2>
    </div>


    <div class='row'>
        <div class='col my-auto mx-auto d-block'>
        <img class="rounded mx-auto my-3 d-block .img-fluid. auto;" src={Tyrell_County} alt="Tyrell_County" width='500px' height='257.47'></img>
        </div>
        <div class='col'>
        <img class="rounded mx-auto my-3 d-block .img-fluid. auto;" src={Vicious_Cycles} alt="Vicious_Cycles" width='500px'></img>
        </div>
        <div class='col'>
        <img class="rounded mx-auto d-block .img-fluid. auto;" src={pleasure_island} alt="pleasure_island" width='500px'></img>
        </div>
    </div>


    </body>
    )
};

export default Main;

/* eslint-disable no-unused-vars */