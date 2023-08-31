import React from "react";
import "./App.css";
import { Routes , BrowserRouter, Route,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Banner from "./components/Banner";
import Main from "./components/main";
import Courses from "./components/courses";
import Footer from "./components/Footer/Footer";
import Industries from "./components/instructors";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Banner/>
        <Main/>
        <Courses/>
        <Industries/>
        <Testimonial/>
        <Footer/>
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/services" component={Services}></Route>

          
          <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;