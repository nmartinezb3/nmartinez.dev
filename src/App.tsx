import React from 'react';
import Terminal from './components/terminal/Terminal';
import GlobalStyles from './GlobalStyles';
import Info from './components/info/Info';
import { AppContainer, Layout } from './App.styles';
import TerminalProvider from './terminalState/TerminalState';

const App: React.FunctionComponent = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Layout>
        <TerminalProvider>
          <Info />
          <Terminal />
        </TerminalProvider>
      </Layout>
    </AppContainer>
  );
};

export default App;
