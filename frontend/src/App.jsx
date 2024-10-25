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
import { AuthProvider } from './AuthContext.jsx';
// protected routes from here-
import ProtectedRoute from './Component/ProtectedRoute.jsx';
import { Dashboard } from './Pages/Dashboard.jsx';
import { SendMoney } from './Pages/SendMoney.jsx';


function App() {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
        <Routes> {/* Fixed Routes import */}
        <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
           {/* Protecting the Dashboard Route */}
           <Route 
                        path="/dashboard" 
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } 
                    />

           <Route 
                        path="/sendMoney/:id" 
                        element={
                            <ProtectedRoute>
                                <SendMoney />
                            </ProtectedRoute>
                        } 
                    />
                    
         </Route> 
        
        
       
         
        </Routes>
      </BrowserRouter>
     </AuthProvider>
     
    </>
  );
}

export default App;
