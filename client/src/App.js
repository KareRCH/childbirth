import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './containers/Main';
import PlusSites from './containers/PlusSites';
import MapLinker from './containers/MapLinker';
import Goverment from './containers/Goverment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/plussites" element={<PlusSites />}/>
          <Route path="/maplinker/:gu" element={<MapLinker />}/>
          <Route path="/goverment" element={<Goverment />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
