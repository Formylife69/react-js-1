import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>

        </div>
      </Router>
    )
  }
}

export default App;