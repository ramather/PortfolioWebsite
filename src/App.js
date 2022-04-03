import Intro from "./components/intro/intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./global.scss";
import Footer from "./components/footer/Footer";
import particlesConfig from "./components/intro/particles-config";
import ParticleBackground from "./components/intro/ParticleBackgroud";

function App() {
  return (
    <div className="app">
      <div>
<ParticleBackground params={particlesConfig}></ParticleBackground>
        <Intro />
        <Works />
        <Contact />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
