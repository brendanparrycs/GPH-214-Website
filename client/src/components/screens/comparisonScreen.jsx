import { useState } from "react";
import ComparisonSection from "../comparisonSection";
import sections from "../../helpers/sections.json";

export default function ComparisonScreen() {
  // TODO: Add functionality to swapping between sections
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="w-screen bg-dark-space-gray p-8 flex flex-col gap-8">
      {/* Why Jupiter? Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-red-700 text-xl">Why Jupiter?</h2>
        <p className="text-sm">
          Jupiter's atmosphere has many striking similarities and differences to
          Earth's. Due to its massive size and lack of a solid surface, Jupiter
          has large-scale weather patterns very similar to Earth's. These
          phenomena mirror Earth's processes, such as storm formation, heat
          transport, and convection, but occur on a far larger scale with longer
          lifespans. Its internal heat and rapid rotation drive powerful zonal
          winds and storms, like the Great Red Spot, providing a unique
          opportunity for scientists to study atmospheric dynamics that help
          refine our understanding of Earth's meteorology.
        </p>
      </div>
      {/* Comparison Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-8 overflow-x-scroll scrollbar-hidden">
            {sections.map((section, index) => (
              <button
                className={`text-sm text-nowrap transition-colors duration-300 ${
                  currentSection !== index ? "text-gray-400" : ""
                }`}
                key={index}
                onClick={() => setCurrentSection(index)}
              >
                {section.title}
              </button>
            ))}
          </div>
          <hr className="border-orange-500" />
        </div>
        <ComparisonSection
          title={sections[currentSection].title}
          caption={sections[currentSection].caption}
          paragraph1={sections[currentSection].paragraph1}
          paragraph2={sections[currentSection].paragraph2}
          image={sections[currentSection].image}
          credits={sections[currentSection].credits}
          link={sections[currentSection].link}
        />
      </div>
    </div>
  );
}
