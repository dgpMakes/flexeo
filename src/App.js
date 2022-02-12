import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';


function App() {
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>

      </Routes>
    </Router>
  );
}

export default App;
