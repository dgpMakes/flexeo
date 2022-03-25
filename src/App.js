import './App.css';
import Navbar from './components/Navbar';
import NavbarBottom from './components/NavbarBottom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import { SuperContainer} from './pages/PagesElements';
import Footer from './components/Footer';
import Upload from './pages/upload';

function App() {
  return (

    <Router>
      <Navbar/>
        <SuperContainer>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/upload" exact element={<Upload/>}/>
          </Routes>
        </SuperContainer>
        <Footer></Footer>
      <NavbarBottom/>
    </Router>
      
  );
}

export default App;
