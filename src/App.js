import React from 'react';
import Forma from './Forma';
import logo from './Logo mini transparente F negro.png';
import styled from 'styled-components';

const Logo = styled.img`
  width: 15vw;
  position: absolute;
  top: 10px;
  left: 40px;
`;
const Div = styled.div`
  margin-top: 100px;
`;

function App() {
  return (
    <>
      <Div>
        <Logo mg src={logo} alt="" />
        <h1>Encuesta de satisfacción Coaching Musical</h1>
      </Div>
      <Forma />
    </>
  );
}

export default App;
