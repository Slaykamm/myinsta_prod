import React from 'react';
import AppRouter from './AppRouter';
import { HashRouter as Router } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
};

export default App;