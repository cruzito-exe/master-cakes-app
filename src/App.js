import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import Catalogue from './components/pages/Catalogue';
import About from './components/pages/About';
import Privacy from './components/pages/Privacy';
import Footer from './components/navigation/Footer';
import Shipments from './components/pages/Shipments';
import Return from './components/pages/Return';

function App() {
 return (
  <Router>
   <Navbar/>
    <Routes>
     <Route exact path='/' Component={Home}/>
     <Route path='/catalogue' Component={Catalogue}/>
     <Route path='/about' Component={About}/>
     <Route path='/privacy-policy' Component={Privacy}/>
     <Route path='/shipments-policy' Component={Shipments}/>
     <Route path='/return-policy' Component={Return}/>
    </Routes>
   <Footer/>
  </Router>
 );
}

export default App;
