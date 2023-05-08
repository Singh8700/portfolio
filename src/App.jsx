import {useState} from "react";
import {
 /* BrowserRouter as Router,*/
 useLocation,
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
  const location = useLocation();
  const path = location.pathname;
  const [alerts,setAlerts]=useState(null);
  const showAlert=(msg)=>{
    setAlerts(msg)
    setTimeout(()=>{
      setAlerts(null)
    },1500);
  }

  return (
   <>
   <Alerts msg={alerts}/>
   <Animation/>
   <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/contact" element={<Contact showAlert={showAlert}/>}/>
    <Route path="/services" element={<Portfolio/>}/>
   </Routes>
    <Nav path={path}/>
    <Maps/>
    <Footer/>
    </>
  );
}

export default App;
