import { useState } from "react";

export default function SimulationScreen() {
  const [loadSimulation, setLoadSimulation] = useState(false);
  const [spanVisible, setSpanVisible] = useState(true);

  const onClick = () => {
    setSpanVisible(false);

    setTimeout(() => {
      setLoadSimulation(true);
    }, 300);
  };

  return (
    <div className="w-screen h-screen bg-light-space-gray flex flex-col gap-2 p-12">
      <div
        className="w-full h-full relative group cursor-pointer overflow-hidden"
        onClick={onClick}
      >
        <span
          className={`border-3 text-gray-400 border-orange-500 border-opacity-60 rounded-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 z-50 text-xl text-nowrap font-bold group-hover:scale-105 group-hover:text-white group-hover:border-opacity-100 transition-all duration-300 text-center ${
            spanVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Load Simulation
        </span>
        <iframe
          src="https://eyes.nasa.gov/apps/solar-system/#/jupiter"
          className={`w-full h-full transition-all duration-300 ${
            loadSimulation ? "blur-none" : "blur-sm"
          }`}
          style={{ pointerEvents: loadSimulation ? "auto" : "none" }}
          loading="lazy"
        ></iframe>
      </div>
      <p className="text-xs">
        Simulation provided by NASA's Eyes on the Solar System. Visit{" "}
        <a
          href="https://eyes.nasa.gov"
          target="_blank"
          className="text-red-500 underline underline-offset-2"
        >
          eyes.nasa.gov
        </a>{" "}
        for more information.
      </p>
    </div>
  );
}
