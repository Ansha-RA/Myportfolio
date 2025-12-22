import { education } from "../../constants";
function Education() {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] font-sans skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-cyan-400 transform -translate-x-1/2" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center mb-20 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 bg-gray-900 border border-purple-500 rounded-2xl shadow-lg backdrop-blur-md
              transform transition-transform duration-300 hover:scale-105
              ${
                index % 2 === 0
                  ? "ml-0 sm:ml-44 clip-left"
                  : "mr-0 sm:mr-44 clip-right"
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-400">{edu.school}</p>
                  <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-purple-400 font-semibold">Grade: {edu.grade} </p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Education;