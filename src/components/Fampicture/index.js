import styled from 'styled-components/macro';


export default function Fampicture() {
  const familyPicture = new URL("../images/assemblee.jpg", import.meta.url)
  return (
    <Wrapper>
      <img  src={familyPicture} alt="" />
    </Wrapper>
  )
};

const Wrapper = styled.div`
border-radius: 5px;
  box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
  text-align: center;
  padding-top: 10px;
  font-size: 1.8rem;
  display: flex;npm start
  
  justify-content: center;
  align-items: center;
& img {
  max-width: 90%;
  height: 90%;
  object-fit: contain;
  margin: auto;
}
`;

