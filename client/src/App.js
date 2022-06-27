import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './containers/Main';
import PlusSites from './containers/PlusSites';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/plussites" element={<PlusSites />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
