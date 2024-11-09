import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import jupiter from "../../images/jupiter.png";
import MobileSlider from "../mobileSlider";
import SubSection from "../subSection";
import VerticalDivider from "../verticalDivider";

export default function TitleScreen() {
  // TODO: add NASA API for information

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* Main */}
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
          src={jupiter}
          className="scale-150 brightness-50 z-10 absolute -translate-x-2 translate-y-12 sm:right-0 xl:scale-125"
        />
        <ShootingStars />
        <StarsBackground />
      </div>
      {/* Subsection */}
      <div className="h-1/6 bg-space-gray flex items-center justify-between z-50">
        <MobileSlider /> {/* Only displays on mobile */}
        {/* Ipad and larger screen view */}
        <div className="hidden w-full h-full md:flex items-center justify-between p-6">
          <SubSection title="Distance from Sun" value="XXX,XXX,XXX" unit="MI" />
          <VerticalDivider className="bg-black" />
          <SubSection title="Length of Year" value="4,333" unit="Days" />
          <VerticalDivider className="bg-black" />
          <SubSection title="Axial Tilt" value="3.13" unit="Degrees" />
        </div>
      </div>
    </div>
  );
}
