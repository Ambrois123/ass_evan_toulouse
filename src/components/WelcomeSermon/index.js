import HearTheWord from '../HearTheWord';
import styled from 'styled-components/macro';





export default function WelcomeSermon() {
  return (
    <Wrapper>
      <HearTheWord />
    </Wrapper>
  )
};

const Wrapper = styled.div`
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

