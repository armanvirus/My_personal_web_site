import {useEffect, useState} from "react";
import {BrowserRouter , Link, Route , Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import About from './Screens/About';
import Resume from "./Screens/Resume";
import Map from "./Map";
import "./App.css"
import AOS from "aos";
import "aos/dist/aos.css"
// import HomePage from "./ArksClients/HomePage";




function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // AOS.init();
    // AOS.refresh()
    // document.getElementById("loader").style.display = "none";

    setLoading(false);
  }, [])

  if(loading){
    return null;
  }


  return (
    <BrowserRouter>
    <div className="App">
    {/* <Contact/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Resume' element={<Resume/>} />

      {/* <Route path='/' element={<Map/>} /> */}
       
    </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
