import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../UI//GlobalStyle'
import lightTheme from '../themes/light.json'
import darkTheme from '../themes/dark.json'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

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
            {children}
            <Footer />
        </Wrapper>
    </ThemeProvider>
    
  )
}

const Wrapper = styled.div`

`;

export default Layout