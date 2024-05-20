import React from 'react';
import './styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
