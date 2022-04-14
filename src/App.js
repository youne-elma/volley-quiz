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
        <Route path="/volley-quiz/" exact element={<StartGame />} />
        <Route path="/volley-quiz/game" element={<Game />} />
        <Route path="/volley-quiz/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
