import React from "react";
import { Routes, Route } from 'react-router-dom';

// App Components
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import Featured from "./components/Featured";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='teachers' element={<Teachers/>}/>
        <Route path='teachers/:topic/:name' element={<Featured/>}/>
        <Route path='courses/*' element={<Courses/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;