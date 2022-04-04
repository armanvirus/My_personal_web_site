import {useEffect} from "react";
import {BrowserRouter , Link, Route , Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import About from './Screens/About';
import "./App.css"
import AOS from "aos";
import "aos/dist/aos.css"




function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])


  return (
    <BrowserRouter>
    <div className="App">
    {/* <Contact/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/About' element={<About/>} />
       
    </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
