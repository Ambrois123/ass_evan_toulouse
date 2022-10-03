import Aboutus from '../AboutUs/Aboutus';
import CredoHomePage from '../CredoHomePage/index';
import CredoPicture from '../CredoPicture/index';
import Fampicture from '../Fampicture/index';
import React from 'react'
import styled from 'styled-components'
import TemplateGggwoAboutus from '../TemplateGggwoAboutus/TemplateGgwo'


function Template() {
  return (
    <div>
        <Wrapper>
            <Aboutus />
            <Fampicture />
            <CredoPicture />
            <CredoHomePage />
        </Wrapper>
        <TemplateGggwoAboutus />
        
    </div>
  )
}

const Wrapper = styled.div`
display: grid;
width: 80%;
min-height: 400px;
margin: auto;
grid-template-columns: 1fr 1fr;
gri-template-rows: 1fr 1fr 1fr;
padding: 24px;
row-gap: 20px;
@media(max-width:992px){
    grid-template-columns: 1fr;
}
`;
export default Template