import React from "react";


import Words from "./Pages/Words/index.js";
import Sentens from "./Pages/Sentens/index.js";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Sentens />
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/sentens">Sätze</Link> */}
      <Routes>
        {/* <Route path="/" element={<Words />} /> */}
        {/* <Route path="/" element={<Sentens />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
