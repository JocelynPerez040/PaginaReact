import React from 'react';
import '../css/style.css';
import icono from '../images/icono.png';  
import styled from 'styled-components';

const Navbar =()=>{
    return(
        <Nav>
        <section>
            <header>
                <img src={icono} alt=""/>
                <nav>
                    <ul>
                        <a href="#inicio">INICIO</a>
                        <a href="#galaxia">GALAXIA</a>
                        <a href="#planetas">PLANETAS</a>
                        <a href="#contelaciones">CONSTELACIONES</a>
                        <a href="#curiosidades">CURIOSIDADES</a>
                        <a href="#actividades">ACTIVIDADES</a>
                    </ul>
                </nav>
            </header>        
        </section>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.section`
header{
    display: flex;
    flex-direction: row;
    align-items: center;   
    justify-content:space-between;
    height: 80px;
    background-color: var(--black_nav);
}

img{
    margin-left: 2%;
    width: 4%;
	height: 60; 
}

nav a{
	font-size: 19px;
	font-family: 'Oswald', sans-serif;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .1s;
	color: var(--white);
    text-decoration: none;
    margin-right:25px;
}

nav a:hover {background-size: 100% 2px;}
`;


