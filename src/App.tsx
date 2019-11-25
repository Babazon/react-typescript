import React from 'react';
import { Main } from './container/Main';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const StyledDiv = styled.div`
text-align: center
`;

const StyledHeader: any = styled('header')((props: IProps): any => ({
  'background-color': '#282c34',
  'min-height': '100vh',
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'font-size': 'calc(10px + 2vmin)',
  'color': props.color
}));

interface IProps {
  color: string;
}

class App extends React.Component {

  private displayName = 'App';

  public render() {
    return (
      <StyledDiv>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.displayName}</title>
        </Helmet>
        <StyledHeader color={'red'}>
          <Main />
        </StyledHeader>
      </StyledDiv>
    );
  }

}

export default App;
