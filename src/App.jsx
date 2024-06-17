import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import Experience from "./components/Experience";

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-400 selection:text-black">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <ScrollTop />
    </div>
  );
};

export default App;
