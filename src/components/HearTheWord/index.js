import styled from 'styled-components/macro';



export default function HearTheWord() {
  return(
    <Wrapper>
        La loi de l'Éternel est parfaite, elle restaure l'âme; 
        Le témoignage de l'Éternel est véritable, il rend sage l'ignorant. 
    </Wrapper>
  )
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding: 25px;
  font-size: 2rem;
  font-family: 'Great Vibes', cursive;
  line-height : 1.5;
  font-weight: 300;
  @media(max-width: 1200px){
  font-size: 1.8rem;
}
@media(max-width: 768px){
  font-size: 1.6rem;
}
@media(max-width: 576px){
  font-size: 1.4rem;
}
`;

