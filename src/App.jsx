import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Management from './Management';
import Homepage from './Homepage';
import Induction from './Induction';
import SignInOut from './SignInOut';
import { useState, useEffect } from 'react';

function App() {

const [inductions, setInductions] = useState([]);

useEffect(() => {
  const saved = localStorage.getItem("inductions");
  if (saved) {
    setInductions(JSON.parse(saved));
  }
}, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />


          <Route path="/management" element={
            <Management inductions={inductions} />} />


          <Route path="/induction" element={
            <Induction setInductions={setInductions} />} />


          <Route path="/signinout" element={<SignInOut />} />
        </Routes>
    </Router>
  );
}

export default App; 