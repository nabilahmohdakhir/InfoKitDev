import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Housekeeping } from "./components/Housekeeping";
import { Tentative } from "./components/Tentative";
import { Location } from "./components/Contact";
import React from 'react';

import {Highlights} from "./components/Travel"

import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Housekeeping />
      <br></br>
      <br></br>
      
      <Highlights/>
      <Tentative />

      <Location/>
      <Footer />
    </div>
  );
}

export default App;
