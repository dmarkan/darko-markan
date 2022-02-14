import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Websites from './pages/Websites';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/websites' element={<Websites/>} />
        <Route path='/apps' element={<Apps/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </Router>
);
}
  
export default App;