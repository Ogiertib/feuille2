
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Time from './TimePage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Router>
      <div>
        <nav>
        <h2>Igienair Feuille d'heure</h2>
          <ul>
            <li>
              <Link to="/Time">Calcule du temps</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Time" element={<Time />}> </Route>
         
        </Routes>
      </div>
    </Router>
      </header>
     
    </div>
  );
}

export default App;