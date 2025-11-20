import React from "react";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Process from "./Components/Process";
import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTA";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";

function App() {
  return (
    <div className="font-jost">
      <Analytics />
      <Navbar />
      <main className="bg-white">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section bg-gray-50">
          <Skills />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="projects" className="section bg-gray-50">
          <Projects />
        </section>
        <section id="process" className="section">
          <Process />
        </section>
        <section id="testimonials" className="section bg-gray-50">
          <Testimonials />
        </section>
        <section id="cta" className="section">
          <CTA />
        </section>
        <section id="contact" className="section bg-gray-50">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
