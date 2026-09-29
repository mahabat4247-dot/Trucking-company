import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Fleet />
        <WhyChooseUs />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
