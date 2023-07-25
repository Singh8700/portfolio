import {useState, useEffect} from "react";
import {
 useLocation,
  Routes,
  Route
} from "react-router-dom";
import Theme from "./templates/Themes"
import {ThemeProvider} from "styled-components"
import {GlobalStyle} from "./templates/GlobalStyle"
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
import Error from "./components/error/Error"
import HeroSection from "./components/heroSection/HeroSection"
const App = () =>{
  const location = useLocation();
  const path = location.pathname;
  const [alerts,setAlerts]=useState(null);
  useEffect(()=>{
    window.scrollTo({top:0, behaviour:"smooth"})
  },[path])
  const showAlert=(msg)=>{
    setAlerts(msg)
    setTimeout(()=>{
      setAlerts(null)
    },1500);
  }

  return (
   <>
   <ThemeProvider theme={Theme}>
   <GlobalStyle/>
   <Alerts msg={alerts}/>
   <Animation/>
   <Routes>
    <Route path="/" element={<Header/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/contact" element={<Contact showAlert={showAlert}/>}/>
    <Route path="/services" element={<Portfolio/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
    <Nav path={path}/>
    <Maps/>
    <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
