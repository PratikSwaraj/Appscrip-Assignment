import React from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar.js";
import Body from "./Components/Body/Body.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          luctus urna sed urna ultricies ac tempor dui sagittis.
        </p>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
