import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home';
import Axios from "axios";




function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' exact element={<Home />} />
        </Routes>
      </Router>
  );
}


export default App;
