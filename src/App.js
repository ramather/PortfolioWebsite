import Intro from "./components/intro/intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./global.scss";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <div>
        <Intro />
        <Works />
        <Contact />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
