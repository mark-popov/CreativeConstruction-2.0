import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Management from './Management';
import Homepage from './Homepage';
import Induction from './Induction';
import SignInOut from './SignInOut';
import Rams from './Rams';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {

const [inductions, setInductions] = useState([]);
const [signInOuts, setSignInOuts] = useState([]);
const [rams, setRams] = useState([]);

useEffect(() => {
  const saved = localStorage.getItem("inductions");
  if (saved) {
    setInductions(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  const saved = localStorage.getItem("signInOuts");
  if (saved) {
    setSignInOuts(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  const saved = localStorage.getItem("rams");
  if (saved) {
    setRams(JSON.parse(saved));
  }
}, []);


  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />


          <Route path="/management" element={
            <Management inductions={inductions} signInOuts={signInOuts} rams={rams}
            />} />


          <Route path="/induction" element={
            <Induction setInductions={setInductions}
            />} />


          <Route path="/signinout" element={
            <SignInOut
               setSignInOuts={setSignInOuts}
               signInOuts={signInOuts}
               />}
          />

          <Route path="/rams" element={
            <Rams rams={rams} setRams={setRams}/>}         
          />
        </Routes>
    </Router>
  );
}

export default App; 