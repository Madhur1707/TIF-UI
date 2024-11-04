import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
