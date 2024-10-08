import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { AnimatePresence } from 'framer-motion';
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Preloader from './components/Preloader';
import { useEffect, useState } from "react";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
    <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
    </AnimatePresence>
      <div className="pt-[4rem] lg:pt-[2.8rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
