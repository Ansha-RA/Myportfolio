import React from "react"
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Work from "./components/Work/Work.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import BlurBob  from "./BlurBob";


function App() {
  return (
    <div className="bg-[#050414]">
      <BlurBob position={{top: "35%" , left: "20%"}} size={{width: "30%" , height: "40%"}}></BlurBob>
    {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask_image:radial-gradient(eelipse_60%_50%_at_50%_0%_#000_70%)]"> */}
    <div className="relative pt-16">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Work/>
      <Education />
      <Contact />
      <Footer />
    </div>
    </div>
    // </div>
  );
}



export default App;






