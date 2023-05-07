import {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/header/Header";
import Maps from "./components/maps/Maps"
import Nav from "./components/nav/Nav"
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Animation from "./Animation";
import Alerts from "./components/alerts/Alerts";
import Footer from "./components/footer/Footer";
const App = () =>{
  const [alerts,setAlerts]=useState(null);
  const showAlert=(msg)=>{
    setAlerts(msg)
    setTimeout(()=>{
      setAlerts(null)
    },1500);
  }
  
  return (
   <Router>
   <Alerts msg={alerts}/>
   <Animation/>
   <Nav/>
   <Routes>
    <Route path="/portfolio" element={<Header/>}/>
    <Route path="/portfolio/about" element={<About/>}/>
    <Route path="/portfolio/experience" element={<Experience/>}/>
    <Route path="/portfolio/contact" element={<Contact showAlert={showAlert}/>}/>
    <Route path="/portfolio/services" element={<Portfolio/>}/>
   </Routes>
    <Maps/>
    <Footer/>
    </Router>
  );
}

export default App;
