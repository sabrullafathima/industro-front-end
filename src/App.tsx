import "./App.css";
import Footer from "./components/Footer/Footer";
import ForCanditates from "./components/ForCanditates/ForCanditates";
import ForHiringManagers from "./components/ForHiringManagers/ForHiringManagers";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="landingPage">
      <Navbar />
      <Hero />
      <HowItWorks />
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "3rem 2rem",
          gap: "2rem",
        }}
      >
        <ForCanditates />
        <ForHiringManagers />
      </section>
      <Footer />
    </div>
  );
}

export default App;
