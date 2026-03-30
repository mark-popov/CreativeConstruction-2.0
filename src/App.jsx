import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Homepage';
import Management from './Management';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/management" element={<Management />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 