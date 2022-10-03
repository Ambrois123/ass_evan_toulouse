import styled from 'styled-components/macro';

export default function Title() {
  return (
    <Wrapper>
      <Para>Qui sommes-nous ?</Para>
    </Wrapper>
  )
};

const Wrapper = styled.div`
text-align: center;
font-weight; 500;
width: 90%;
height: 4rem;
margin: auto;
margin-top: 35px;
display: block;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
`;

const Para = styled.h3`
font-size: 1.6rem;
font-weight: 400;
margin-top: 10px;
@media(max-width: 576px){
    font-size: 1.6rem;
  }
  @media(max-width: 768px){
    f
  }
  @media(max-width: 992px){}
  @media(max-width: 1200px){}
  @media(max-width: 1400px){}
`;