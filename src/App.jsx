import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navigation,
  Directory,
  Notes,
  Reviews,
  StarsCanvas,
} from "./components";
import Brands from "./components/Brands";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-saffron">
        <div className="bg-saffron bg-cover bg-no-repeat bg-center">
          <Navigation />
          <Hero />
        </div>

        <About />
        <Directory />
        <Brands />
        <Notes />
        <Reviews />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
