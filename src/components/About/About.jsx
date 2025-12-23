import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImg from "../../assets/AnshaProfile.jpeg";


const About = () => {
  const [text] = useTypewriter({
    words: [
      "Front-end Developer",
      "Web Developer",
      "UI/UX Designer",
      "Coder",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Ansha Shabbir
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec]">
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8245ec] to-[#a855f7]">
  {text}
</span>
<Cursor cursorStyle="|" cursorColor="#8245ec" />

          </h3>

          {/* About me paragraph  */}

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Front-end Developer proficient in React.js, JavaScript, HTML5, and CSS, complemented by experties in Tailwind and MaterialUI.
            Experienced in building cross-browser compatible and responsive web interfaces to deliver impactful and user-centered solutions.
          </p>

          {/* Resume Button  */}

          <a
            href="https://1drv.ms/b/c/d5acff646e99a122/IQBK4d0FuxXmTK2HTjN5RffLAQo9L2rnnm0o2bYzFyQ6MK8?e=M5AkMb"
            target="_blank"
            rel="noopenernoreferrer"
            className="inline-block text-white py-3 px-3 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>


        {/* Right side  */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >

            <img
              src={profileImg}
              alt="Ansha Shabbir"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />

          </Tilt>
        </div>

        

      </div>
    </section>
  );
};

export default About;


