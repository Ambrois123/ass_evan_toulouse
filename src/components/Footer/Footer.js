import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
        Assemblée Evangélique de la Grâce de Toulouse <span>&copy;</span> 2022 
        | Crée par Ambroise A.
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items:center;
height: 50px;
box-shadow: -1px -11px 12px -7px rgba(0, 0, 0, 0.22);
text-align: center;
font-size: 12px;
color: inherit;
`;

export default Footer