import {BrowserRouter as Router , Routes, Route }from "react-router-dom";
import {Button } from '@chakra-ui/react';
import  MyHeader  from "./components/MyHeader";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Upload from "./components/Upload";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
      <Router>
        <MyHeader/>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/video" element={<Video />}/>
                <Route path="/Upload" element={<Upload />}/>
                <Route path="/login" element={<Login  />}/>
                <Route path="/signup" element={<Signup/>}/>
              </Routes> 
        <Footer/>
      </Router>

  );
}

export default App;
