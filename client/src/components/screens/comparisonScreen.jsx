import { useState } from "react";
import ComparisonSection from "../comparisonSection";

export default function ComparisonScreen() {
  // TODO: Add functionality to swapping between sections
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

  return (
    <div className="w-screen bg-dark-space-gray p-8 flex flex-col gap-8">
      {/* Why Jupiter? Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-red-600 text-xl">Why Jupiter?</h2>
        <p className="text-sm">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant auctor
          phasellus interdum nec, at mollis non facilisi accumsan. Euismod
          platea placerat efficitur aliquam felis suscipit. Ac tincidunt a nibh
          mollis orci etiam platea cursus id.
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
                {section}
              </button>
            ))}
          </div>
          <hr className="border-orange-500" />
        </div>
        <ComparisonSection />
      </div>
    </div>
  );
}
