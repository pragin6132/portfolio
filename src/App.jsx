import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Background from "./three/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import Cursor from "./components/Cursor/Cursor";
import Loader from "./components/Loader/Loader";
import ChatBot from "./components/chatbot/ChatBot";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowChat(true);
  }, 3500);

  return () => clearTimeout(timer);
}, []);

  return (
    <ReactLenis
  root
  options={{
    autoRaf: true,
  }}
>
      {/* Background */}
      <Background />

      {/* UI */}
      <Cursor />
      <Loader />
      <ScrollProgress />
      <BackToTop />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main className="relative z-10 w-full overflow-hidden flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating ChatBot */}
      {showChat && (
  <ChatBot
    chatOpen={chatOpen}
    setChatOpen={setChatOpen}
  />
)}
    </ReactLenis>
  );
}

export default App;