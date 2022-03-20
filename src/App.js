import './App.css';
import Navbar from './components/Navbar';
import NavbarBottom from './components/NavbarBottom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
//import Upload from './pages/upload';


function App() {
  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        {/*<Route path="/upload" exact element={<Upload/>}/>*/}
      </Routes>
      <NavbarBottom/>
    </Router>
      
  );
}

export default App;
