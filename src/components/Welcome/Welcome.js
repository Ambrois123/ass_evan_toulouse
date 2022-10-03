import React from 'react'
import styled from 'styled-components'

function Welcome() {
  return (
    <Wrapper>
        <Title>
        Bienvenue sur le site de l'Assemblée Chrétienne de la Grâce de Toulouse
        </Title>
    </Wrapper>
  )
}
const Wrapper =styled.div`
display: grid;
width: 80%;
min-height: 150px;
margin: auto;
grid-template-columns: 1fr;
padding: 24px;
row-gap: 20px;
@media(min-width: 1400px){
    min-height: 120px;
}
`;

const Title = styled.h3`
border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 25px;
  font-size: 1.4rem;
  line-height : 1.5;
  font-weight: 400;
  @media(max-width: 576px){
    font-size: 1.2rem;
  }
  @media(max-width: 768px){
    font-size: 1.2rem;
  }
  @media(max-width: 992px){
    font-size: 1.4rem;
  }
`;

export default Welcome