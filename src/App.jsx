import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Industries from "./components/Industries.jsx";
import Approach from "./components/Approach.jsx";
import Why_us from "./components/Why_us.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Approach />
      <Why_us />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
