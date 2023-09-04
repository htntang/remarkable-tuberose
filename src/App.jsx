import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";
import Navigation from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-beige">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navigation />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
