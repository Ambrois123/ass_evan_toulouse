import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
  return (
    <Nav>
        <Link to='/'>
            <Menu isCurrentPage={location.pathname === "/"} >Accueil</Menu>
        </Link>
        <Link to='/About'>
            <Menu isCurrentPage={location.pathname === "/"} >Qui sommes-nous?</Menu>
        </Link>
        <Link to='/Predication'>
            <Menu isCurrentPage={location.pathname === "/"} >Predication</Menu>
        </Link>
        <Link to='/Contact'>
            <Menu isCurrentPage={location.pathname === "/"} >Contact</Menu>
        </Link>
    </Nav>
  )
}
const Nav = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
height: 2.3rem;
width: 100%;
& a{
    text-decoration: none;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
}
`;

const Menu = styled.p`
text-decoration: none;
color: #e76f51;
font-size: 13px;
display: inline;
`;


export default Navbar