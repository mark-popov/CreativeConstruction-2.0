import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Management from './Management';
import Homepage from './Homepage';
import Induction from './Induction';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/management" element={<Management />} />
          <Route path="/induction" element={<Induction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 