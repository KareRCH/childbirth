import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<PlusSites />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
