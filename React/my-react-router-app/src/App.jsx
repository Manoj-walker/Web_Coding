 
 import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
 import React from "react";
 import Home from "./Homepage";
 import About from "./Aboutpage";


 function App(){


    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
 }



 export default App