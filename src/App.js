import './App.css';
import Header from './components/header/Header'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import { Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contactUs' element={<ContactUs />} /> 
        </Routes>
    </div>
  );
}
export default App;



