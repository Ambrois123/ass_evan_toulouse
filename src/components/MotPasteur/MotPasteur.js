
import FamilleContact from '../FamilleContact';
import React from 'react'
import styled from 'styled-components'
import PresentationPast from '../PresentationPast/Presentation'


function MotPasteur() {
  return (
    <div>
        <Wrapper>
        <FamilleContact />
        <PresentationPast />
        </Wrapper>
    </div>    
  )
}



const Wrapper = styled.div`

display: grid;
padding: 3em;
grid-gap: 1.2em;
margin: auto;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);

${'' /* display: grid;
width: 80%;
min-height: 400px;
margin: auto;
grid-template-columns: 1fr 1fr;
gri-template-rows: 1fr 1fr 1fr;
padding: 24px;
row-gap: 20px;
@media(max-width:992px){
    grid-template-columns: 1fr;
} */}
`;
export default MotPasteur