import styled from 'styled-components/macro';



export default function CredoHomePage() {
  return (
    <Wrapper>
     <Title>Nous sommes une assemblée évangélique</Title>
     <div>
            <p>Les églises évangéliques sont issues du protestantisme, 
            qui au travers de la Réforme a réaffirmé <Span>son attachement 
            à l’inspiration des Écritures et à la justification par 
            la foi seule</Span>. Ce qui nous unit, nous réjouit, nous anime, nous motive, 
            c’est l’Évangile qui veut dire Bonne Nouvelle !</p>
            <p>L’Evangile révèle l’amour éternel, infini, inconditionnel et 
            immuable de Dieu. Par Son sacrifice sur la croix, Jésus-Christ 
            a touché notre cœur et ouvert notre intelligence. Il nous offre 
            le pardon de tous nos péchés et la sécurité d’une totale réconciliation 
            avec Dieu le Créateur - Jean 15:13, Esaïe 53 et 1Jean 2:2.</p>
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
