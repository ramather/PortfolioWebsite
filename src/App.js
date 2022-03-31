import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/intro/intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import './global.scss'

function App() {
  return (
    <div className="app">   
    <div>
       <Intro />
      <Works/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
