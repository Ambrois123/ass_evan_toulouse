import React from 'react'
import styled from 'styled-components'
import {MdAlternateEmail} from 'react-icons/md'
import {BsTelephoneForward} from 'react-icons/bs'

function index() {
  return (
    <Wrapper>
    <h4>Adresse de contact</h4>
        <div>
            <p><MdAlternateEmail /> admin@aegtoulouse.fr</p>
        </div>
        <div>
            <p><BsTelephoneForward /> 06 79 27 32 52</p>
        </div>
        <Div>
        <h5>Nos cultes de dimanche ont lieu au fasthotel Balma</h5>
        <h5>De 10h30 à 11h45 </h5>
            <p>2 rue Louis Renault, 31130 Balma</p>
            <p>Métro Balma-Gramont</p>
            
        </Div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 300px;
box-shadow: -1px -11px 12px -7px rgba(0,0,0,0.22);
margin: 50px;
padding: 15px;
padding-top: 30px;
padding-bottom: 30px;
box-shadow: 0px 2.98256px 7.4564px rgb(0, 0, 0, 0.1);

`;

const Div = styled.div`
text-align: center;
margin-top: 5px;
margin-bottom: 5px;
`;

export default index