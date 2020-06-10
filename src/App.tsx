import React from 'react';
import Terminal from './components/terminal/Terminal';
import GlobalStyles from './GlobalStyles';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Terminal />
    </div>
  );
};

export default App;
