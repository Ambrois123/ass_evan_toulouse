import styled from 'styled-components/macro';



export default function ChurchParteners() {
  const Nimes = new URL("../images/Nimes.png", import.meta.url);
  const Montpellier = new URL("../images/Montpellier.webp", import.meta.url);
  const Paris = new URL("../images/ITS-logEEGP.png", import.meta.url);
  const Lyon = new URL("../images/Logo-EEGLYON.png", import.meta.url);
  const Geneve = new URL("../images/eegg_logo.png", import.meta.url);
  const GGWO = new URL("../images/ggwo.png", import.meta.url);
  const ITS = new URL("../images/ITSParis.png", import.meta.url);
  const mbcs = new URL("../images/mbcs.png", import.meta.url);
  const lausanne = new URL("../images/logoLausanne.png", import.meta.url);
  return (
    <Wrapper> 
        <GridLogo>
        <a href="https://www.aegnimes.com/" target="_blank">
        <img src={Nimes} alt="logo" />
        </a>
          <div>
          <p><a href="https://www.aegnimes.com/" target="_blank">Nîmes</a></p>
          </div>
          
        </GridLogo>
        <GridLogo>
        <a href="https://eglisegrace.org/" target="_blank">
        <img src={Montpellier} alt="logo" />
        </a>
          <p><a href="https://eglisegrace.org/" target="_blank">Montpellier</a></p>
        </GridLogo>
        <GridLogo>
        <a href="https://eglisegrace.org/" target="_blank">
        <img src={Paris} alt="logo" />
        </a>
          <p><a href="https://eegparis.org/" target="_blank">Paris</a></p>
        </GridLogo>
        <GridLogo>
        <a href="https://eglisegrace.org/" target="_blank">
        <img src={Lyon} alt="logo" />
        </a>
          <p><a href="https://www.eeglyon.com/" target="_blank">Lyon</a></p>
        </GridLogo>
        <GridLogo>
        <a href="https://eglisegrace.org/" target="_blank">
        <img src={Geneve} alt="logo" />
        </a>
          <p><a href="https://www.eegg.org/" target="_blank">Genève</a></p>
        </GridLogo>
        <GridLogo>
        <a href="https://eglisegrace.org/" target="_blank">
        <img src={GGWO} alt="logo" />
        </a>
          <p><a href="https://ggwo.org/" target="_blank">Baltimore(USA)</a></p>
        </GridLogo>
        <GridLogo>
        <a href="https://eglisegrace.org/" target="_blank">
        <img src={lausanne} alt="logo" />
        </a>
          <p><a href="http://aegl.ch/" target="_blank">Lausanne</a></p>
        </GridLogo>
        <GridLogo>
        <a href="https://eglisegrace.org/" target="_blank">
        <img src={mbcs} alt="logo" />
        </a>
          <p><a href="https://mbcs.edu/" target="_blank">MBC&S</a></p>
        </GridLogo>
    </Wrapper>
  )
};

const Wrapper = styled.div`
display: grid;
width: 80%;
min-height: 50%;
margin: auto;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr 1fr;
padding: 24px;
grid-gap: 30px;
@media(max-width:40px){
    grid-template-columns: 1fr;
}
`;

const GridLogo = styled.div`
background-color: white;
text-align: center;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);
& img {
  width: 60%;
  height: 60%;
  object-fit: contain;
  margin: auto;
}
& a {
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-weight: 500;
}
& p{
  font-size: 12px;
}
`;
