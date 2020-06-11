import React from 'react';
import Terminal from './components/terminal/Terminal';
import GlobalStyles from './GlobalStyles';
import Info from './components/info/Info';
import { AppContainer, Layout } from './App.styles';

const App: React.FunctionComponent = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Layout>
        <Info />
        <Terminal />
      </Layout>
    </AppContainer>
  );
};

export default App;
