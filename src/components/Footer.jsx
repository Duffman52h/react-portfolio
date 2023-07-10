/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css'
import Email from './images/Email.png'
import github from './images/github.png'
import wordpress from './images/wordpress.png'
import linkedin from './images/linkedin.png'

function Footer() {
    return (
        <div class='row bg-info'>
            
        <div class='col'>
        <a href="Brett.t.Duffield@gmail.com"><img class="rounded mx-auto d-block .img-fluid. auto;" src={Email} alt="Email" width="30px"></img></a>
        </div>

        <div class='col'>
        <a href="https://www.linkedin.com/in/brett-duffield-219879171/"><img class="rounded mx-auto d-block .img-fluid. auto;" src={linkedin} alt="Linkdin" width="30px"></img></a>
        </div>

        <div class='col'>
        <a href="https://github.com/Duffman52h"><img class="rounded mx-auto d-block .img-fluid. auto;" src={github} alt="Github" width="30px"></img></a>
        </div>

        <div class='col'>
        <a href="https://bduffportfolio.wordpress.com/"><img class="rounded mx-auto d-block .img-fluid. auto;" src={wordpress} alt="Github" width="30px"></img></a>
        </div>


      </div>
    )
};

export default Footer;

/* eslint-disable no-unused-vars */