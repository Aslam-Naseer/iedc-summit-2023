import Schedule from "./sections/Schedule";
import Speakers from "./sections/Speakers";
import Events from "./sections/Events";
import CountDown from "./components/countDown";
import LandingPage from "./sections/landingPage";
import AboutSummit from "./sections/AboutSummit";

import IedcCircle from "./components/IedcCircle";


import About from "./sections/About"


import Footer from "./sections/Footer";
import Speaker from "./components/SpeakerCard";
import PrevSummut from "./sections/prevSummits";
function App() {
  return (
    <div className="flex flex-col items-center">
      <LandingPage/>
      <AboutSummit />

      <IedcCircle />

      
      <Schedule />
      <Events />
      <About />
      <PrevSummut/>
      <Footer />
    </div>
  );
}

export default App;
