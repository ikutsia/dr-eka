import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import QandA from "./components/QandA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-green">
      <Navbar />
      <Hero />
      <Courses />
      <Testimonials />
      <QandA />
      <Footer />
    </div>
  );
}

export default App;
