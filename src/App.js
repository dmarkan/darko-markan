import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
        <Route path='/omeni' element={<About/>} />
        <Route path='/websajtovi' element={<Websites/>} />
        <Route path='/aplikacije' element={<Apps/>} />
        <Route path='/kontakt' element={<Contact/>} />
    </Routes>
    <Footer />
    </Router>
);
}
  
export default App;