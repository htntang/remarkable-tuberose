import { BrowserRouter } from "react-router-dom";
import {
  About,
  // Contact,
  // Experience,
  Hero,
  Navigation,
  // Tech,
  // Education,
  // Projects,
  // StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-saffron">
        <div className="bg-saffron bg-cover bg-no-repeat bg-center">
          <Navigation />
          <Hero />
        </div>

        <About />

        <div className="relative z-0">
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
