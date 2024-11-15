import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import MobileSlider from "../mobileSlider";
import SubSection from "../subSection";
import VerticalDivider from "../verticalDivider";
import { useEffect, useState } from "react";
import {
  extractOrbit,
  extractRG,
  extractSolarConstant,
} from "../../helpers/regex";

export default function TitleScreen({ horizonsData }) {
  const [solarConstant, setSolarConstant] = useState(null);
  const [orbit, setOrbit] = useState(null);
  const [RG, setRG] = useState(null);

  useEffect(() => {
    if (!horizonsData) return;

    // update solar constant and axial tilt
    setSolarConstant(extractSolarConstant(horizonsData));
    setOrbit(extractOrbit(horizonsData));

    // update distance from usn every 5 seconds
    const rgValues = horizonsData
      .split("\n")
      .map((line) => extractRG(line))
      .filter(Boolean);

    if (rgValues.length > 0) setRG(rgValues[0]);

    let i = 1;
    const interval = setInterval(() => {
      if (i < rgValues.length) {
        setRG(rgValues[i++]);
      } else {
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [horizonsData]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="relative flex-grow bg-black flex items-center justify-between px-8 md:px-16">
        <div className="flex flex-col gap-4 z-20 w-11/12 md:w-2/3 xl:w-3/5">
          <h1 className="text-orange-500 font-bold text-4xl md:text-5xl xl:text-6xl">
            Jupiter
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum
            odor amet, consectetuer adipiscing elit.
          </p>
        </div>
        <img
          src="https://storage.cloud.google.com/gph-214-react-images/jupiter.png?authuser=2"
          className="scale-150 brightness-50 z-10 absolute -translate-x-2 translate-y-12 sm:right-0 xl:scale-125 select-none"
        />
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="h-1/6 bg-light-space-gray flex items-center justify-between z-50">
        <MobileSlider RG={RG} orbit={orbit} solarConstant={solarConstant} />
        <div className="hidden w-full h-full md:flex items-center justify-between p-6">
          <SubSection title="Distance from Sun" value={RG} unit="MI" />
          <VerticalDivider className="bg-black" />
          <SubSection title="Axial Tilt" value={orbit} unit="DEG" />
          <VerticalDivider className="bg-black" />
          <SubSection
            title="Solar Constant"
            value={solarConstant}
            unit={`W/m\u00B2`}
          />
        </div>
      </div>
    </div>
  );
}
