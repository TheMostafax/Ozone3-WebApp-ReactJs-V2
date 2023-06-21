import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Work from "./components/pages/Work";
import PreLoader from './components/PreLoader';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import Client from './components/pages/Client';
import Demo from './components/pages/Demo';
import Package from './components/pages/Package';
import Location from './components/pages/Location';
function App() {
    return (
      <div>
      <PreLoader/>
        <Navbar />
        <Home />
        <About />
        <Service/>
        <Package/>
        <Work />
        <Contact/>
        <Client/>
        <Demo/>
        <Location/>
        <Footer/>
  
      </div>
    );
  }
  
  export default App;