import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../UI//GlobalStyle'
import lightTheme from '../themes/light.json'
import darkTheme from '../themes/dark.json'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar';

function Layout({children}) {
    const [isLight, setIsLight] =useState(true)
    const toggleTheme = () =>{
        setIsLight(!isLight);
    }
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme} >
        <Wrapper>
            <GlobalStyle />
            <Header isLight={isLight} toggleTheme={toggleTheme} />
            <Navbar />
                <Main>
                {children}
                </Main>
            <Footer />
        </Wrapper>
    </ThemeProvider>
    
  )
}

const Wrapper = styled.div`

`;

const Main = styled.div`
width: 100%;
max-width: 1240px;
margin: auto;
`;

export default Layout