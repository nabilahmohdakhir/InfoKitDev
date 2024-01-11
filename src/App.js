import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Housekeeping } from "./components/Housekeeping";
import { Projects } from "./components/Projects";
import { Location } from "./components/Contact";
import {CICO} from "./components/CICO"
import {Travel} from "./components/Travel"

import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Housekeeping />
      <br></br>
      <br></br>
      
      <Travel/>
      <Projects />

      <Location/>
      <Footer />
    </div>
  );
}

export default App;
