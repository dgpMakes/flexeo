import './App.css';
import Navbar from './components/Navbar';
import NavbarBottom from './components/NavbarBottom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import { SuperContainer} from './pages/PagesElements';
import Footer from './components/Footer';
import Upload from './pages/upload';
import ProductInformation from './components/ProductInformation';
//import { name } from 'file-loader';
import SocialSection from './components/SocialSection';
import ChatsSection from './components/ChatsSection';
import PanelSection from './components/PanelSection';

import ModelInformation from './components/ModelInformation';
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
  return JSON.parse(jsonPayload);
}

function App() {
  return (
    
    <Router>
      <Navbar data={getCookie("auth")}/>
        <SuperContainer>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/upload" exact element={<Upload/>}/>
            <Route path="/product/:id" exact element={<ProductInformation/>}/>
            <Route path="/model/:id" exact element={<ModelInformation/>}/>

            <Route path="/social" exact element={<SocialSection/>}/>
            <Route path="/chats" exact element={<ChatsSection/>}/>
            <Route path="/panel" exact element={<PanelSection/>}/>


            
          </Routes>
        </SuperContainer>
        <Footer></Footer>
      <NavbarBottom data={getCookie("auth")}/>
    </Router>
      
  );
}

export default App;
