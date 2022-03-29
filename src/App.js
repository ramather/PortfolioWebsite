import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="app">   
    <div className='sections'>
       <Intro />
      {/* <About /> */}
      <Works/>
      </div>
    </div>
  );
}

export default App;
