import './App.css';
import Navbar from './components/Navbar';
import NavbarUser from './components/NavbarUser';
import NavbarBottom from './components/NavbarBottom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import { SuperContainer} from './pages/PagesElements';
import Footer from './components/Footer';
import Upload from './pages/upload';
//import { name } from 'file-loader';

function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  if(b == null){
    return;
  }
  var token = b[0];
  token = token.substring(8);
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  console.log("ee" + JSON.parse(jsonPayload))
  return JSON.parse(jsonPayload);
}

function App() {
  return (
    
    <Router>
      <Navbar data={getCookie("auth")}/>
      {console.log(getCookie("auth"))}

        <SuperContainer>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/upload" exact element={<Upload/>}/>
          </Routes>
        </SuperContainer>
        <Footer></Footer>
      <Navbar/>
    </Router>
      
  );
}

export default App;
