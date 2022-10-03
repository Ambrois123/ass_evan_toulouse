import React from 'react'
import styled from 'styled-components'

function Presentation() {
  return (
    <Wrapper>
        <Para>
        Le pasteur Ambroise ADANLEDJI a été formé à l’Institut 
        Théologique de Lomé pendant 4 ans. Il a poursuivi sa formation
         au Maryland Bible school and Seminary (USA). Il a servi au sein 
         de l’Eglise Évangélique de la Grâce de Paris comme pasteur assistant 
         pendant 10 ans. Parallèlement, il a été enseignant à l’Institut Théologique du Soir.
        Ensuite, il a servi comme pasteur assistant pendant 4 ans à l’Église de la Grâce de Montpellier.
        En juillet 2021, il déménage à Toulouse pour une implantation d’église. 
        Il est marié et père de trois enfants.
        </Para>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;
const Para = styled.p`
text-align: justify;
font-size: 13px;
color: inherit;
`;
export default Presentation