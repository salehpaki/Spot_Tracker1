import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import FAQSection from "./components/FAQSection";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Hero5 from "./components/Hero5";
import MultiStepForm from "./components/MultiStepForm";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showHero5, setShowHero5] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <div className="relative">
        {!showHero5 && <Navbar onDemoClick={() => setShowHero5(true)} />}

        <AnimatePresence>
          {showHero5 ? (
            <Hero5
              onClose={() => setShowHero5(false)}
              onFormOpen={() => setShowForm(true)}
            />
          ) : (
            <>
              <Hero onShowHero5={() => setShowHero5(true)} />
              <Hero1 />
              <Hero2 />
              <Hero3 />
              <Testimonials />
              <Hero4 onShowHero5={() => setShowHero5(true)} />
             
              <FAQSection />
              <Header />
            </>
          )}
        </AnimatePresence>

        {/* Modal Form Handling */}
        <AnimatePresence>
          {showForm && <MultiStepForm onClose={() => setShowForm(false)} />}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
