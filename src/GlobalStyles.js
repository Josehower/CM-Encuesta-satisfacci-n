import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width:85vw;
    margin: 0 auto;
    padding: 0;
    background: #e7eaee;
    color: #141414;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

textarea{
  width: 80vw;
  height: 100px;
}

h1{
  text-align: center;
  margin-bottom: 80px;
}

#valor{
  div{
  display: grid;
  grid-template-columns: 1fr 2fr;
  }
p {
  grid-column: span 2;
}



  input{
    margin-bottom: 30px;

  }

}

form{
  margin-bottom:100px;
}
`;

export default GlobalStyle;
