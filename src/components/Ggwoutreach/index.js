import styled from 'styled-components/macro';



export default function GgwOutreach() {
  return (
    <Wrapper>
     <Title>Notre mouvement d'églises - GGWO</Title>
     <div>
     <p>
            Notre assemblée à Toulouse est spirituellement affiliée 
            au mouvement d'églises Greater Grace World Outreach, 
            ou G.G.W.O, fondé par le pasteur Carl Stevens. <Span>
            Ce mouvement met l’accent sur le fait que seule la grâce de Dieu, 
            manifestée par la mort de Jésus-Christ à la croix, peut 
            amener les hommes au salut et les croyants à la sanctification.</Span> 
             Par la formation de pasteurs au sein du " Maryland Bible College 
            and Seminary (M.B.C.&S) et par l’envoi de missionnaires, 
            il est à l’origine de nombreuses églises dans le monde.
            </p>
            <p>
            Ces églises ont entre elles un lien spirituel, unies 
            par une même foi fondée sur la Bible, et une même 
            vision qui est de partager l’Evangile au plus grand 
            nombre. Cette affiliation se manifeste par une unité 
            doctrinale, par l’ordination de pasteurs après 
            recommandations et à la suite d’un examen, par des 
            rencontres fraternelles entre les églises (conférences 
            communes à toutes les églises, camps bibliques, voyages 
            missionnaires, etc), et par la possibilité pour les 
            responsables d’églises locales d’obtenir de l’aide et 
            des conseils auprès de référents reconnus.
            </p>
            <p>
            Nos églises sont cependant indépendantes dans leur 
            fonctionnement car l'affiliation à G.G.W.O est 
            indépendante de toute relation administrative et 
            financière. L'Assemblée Evangélique de la Grâce de Toulouse 
            ne verse donc aucune cotisation à G.G.W.O et ne reçoit 
            aucune contribution financière de sa part. Pour 
            information, "Greater Grace World Outreach" signifie 
            littéralement "toucher le monde par une grâce plus 
            excellente". Cette expression tire son origine 
            d'une expression que l'on retrouve en Jacques 4 : 6.
            </p>

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

