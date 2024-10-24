import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Add Routes here
import { useState } from 'react';
import Layout from './Layout.jsx';
// Importing different pages
import Home from './Pages/Home.jsx';
import {Signup} from './Pages/Signup.jsx';  // Add missing imports
import {Signin} from './Pages/Signin.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
// protected routes from here-
import { Dashboard } from './Pages/Dashboard.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> {/* Fixed Routes import */}
        <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          {/* private routes will be here */}
          <Route path="/Dashboard" element={<Dashboard />} />
         </Route> 
       
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
