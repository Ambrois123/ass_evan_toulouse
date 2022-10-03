import styled from 'styled-components/macro';



export default function Aboutus() {
  return (
    <Wrapper>
      <Title>Nous sommes une assemblée</Title>
      <div>
            <p> En tant que chrétiens, nous attachons une grande importance 
            au fait de se rassembler, afin de découvrir et  partager 
            l’amour de Jésus-Christ notre Seigneur.«Car là où deux ou 
            trois sont assemblés en mon nom, je Jésus suis au milieu 
            d’eux.» dit Jésus dans Matthieu 18:20.</p>
            <p><Span>C’est dans l’assemblée, unis autour de la personne et 
            l’œuvre de Christ, à l’écoute de Sa Parole qui est la 
            Bible, que nous saisissons tous les trésors de la foi 
            en Jésus-Christ</Span> (Luc 10:38-42).</p>
          </div>

    </Wrapper>
  )
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.2rem;
  line-height : 1.5;
  & p {
    text-align: justify;
    font-size: 14px;
    color: inherit;
  }
  & a {
    color: beige;
    font-style: italic;
  }
`;
const Title = styled.h4`
font-weight: 400;
`;
const Span = styled.span`
font-weight: 600;
`;
