import React, { useState } from 'react';
import { Main } from './container/Main';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { Input } from './container/Input';

const StyledDiv = styled.div`
text-align: center
`

const StyledHeader = styled.header`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white
`


const App: React.FC = () => {

  const [title, setTitle] = useState('');
  return (
    <StyledDiv>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <StyledHeader>
        <Main />
        <Input setTitle={setTitle} />
      </StyledHeader>
    </StyledDiv>
  );
}

export default App;
