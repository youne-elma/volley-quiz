import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import components
import StartGame from './pages/StartGame';
import Game from './pages/Game';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<StartGame />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
