import GgwOutreach from '../Ggwoutreach/index';
import styled from 'styled-components'
import React from 'react'

export default function TemplateGgwo() {
  return (
    <Wrapper>
        <GgwOutreach />
    </Wrapper>
  )
}
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90%;
min-height: 400px;
margin: auto;
padding: 24px;
${'' /* @media(max-width:1250px){
    grid-template-columns: 1fr;
} */}
`;

