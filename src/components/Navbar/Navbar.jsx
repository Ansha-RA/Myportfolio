import React, { useEffect, useState } from "react";
 import { FiX, FiMenu } from "react-icons/fi";
 import { FaGithub, FaLinkedin } from "react-icons/fa";

 function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
   
  <div
  className="
    fixed top-0 w-full z-50
    bg-gradient-to-r from-[#1a0b2e] via-[#12091f] to-[#050414]
    backdrop-blur-md
    border-b border-white/10
    navbar-grid
  "
> 

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* LOGO */}
        <div className="text-lg font-semibold cursor-pointer text-white">
          <span className="text-[#8245ec]">&lt;</span>
          Ansha<span className="text-[#8245ec]">/</span>Shabbir
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map(item => (
            <li  key={item.id}>
              <a
              href={`#${item.id}`}
              className="cursor-pointer hover:text-[#8245ec]"
            >
              {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ICONS */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Ansha-RA"
            target="_blank"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ansha-shabbir-5506ab39b?"
            target="_blank"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#050414]/95 border-t border-white/10">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map(item => (
              <li
                key={item.id}>
                  <a
                  href={`#${item.id}`}
                className="cursor-pointer hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                </a>
              </li>
            ))}

            <div className="flex space-x-6 pt-2">
            
              <a href="https://github.com/Ansha-RA" 
              target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white" > 
              <FaGithub size={24}/> 
              </a>
               <a href="https://www.linkedin.com/in/ansha-shabbir-5506ab39b?" 
               target="_blank" 
               rel="noopener noreferrer"
                className="text-gray-300 hover:text-white" > 
                <FaLinkedin size={24}/> </a>
            </div>
          </ul>
        </div>
      )}
    </div>
 );
}





export default Navbar;
