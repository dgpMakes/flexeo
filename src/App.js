import './App.css';
import Navbar from './components/Navbar';
import NavbarUser from './components/NavbarUser';
import NavbarBottom from './components/NavbarBottom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './pages/index';
import Home from './pages/home';
import { SuperContainer} from './pages/PagesElements';
import Footer from './components/Footer';
import Upload from './pages/upload';

function App() {
  return (
    
    <Router>
      {/*<NavbarUser/>
        <SuperContainer>*/}
          <Routes>
            <Route path="/" exact element={<Welcome/>}/>
            <Route path="/home" exact element={<Home/>}/>
            <Route path="/upload" exact element={<Upload/>}/>
          </Routes>
        {/*</SuperContainer>
        <Footer></Footer>
      <NavbarBottom/>*/}
    </Router>
      
  );
}

export default App;
