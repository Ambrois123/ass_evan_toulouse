import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.png'
import '../Header/ToggleSwitch.css'

function Header({toggleTheme}) {
  return (
    <Wrapper>
        <Nav>
            <Picture src={Logo} alt="logo" />
        </Nav>
        <div>
            <label className='switch'>
                <input 
                    onChange={toggleTheme}
                    type="checkbox"
                />
                <span className='slider round'></span>
            </label>
        </div>
    </Wrapper>
  )
}

const Wrapper =styled.div`
height: 110px;
display: flex;
justify-content: space-between;
padding: 0px 24px;
align-items: center;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
margin-top: 15px;
`;

const Picture =styled.img`
width: 180px;
`;

export default Header