import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import jupiter from "../../images/jupiter.png";
import VerticalDivider from "../verticalDivider";
import SubSection from "../subSection";

export default function TitleScreen() {
  // TODO: add scaling to title screen
  return (
    <div className="w-screen h-screen">
      {/* main */}
      <div className="w-screen h-full bg-black">
        <div className="absolute top-[35%] left-56 w-1/3">
          <h1 className="text-orange-500 text-7xl my-4">Jupiter</h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum
            odor amet, consectetuer adipiscing elit.
          </p>
        </div>
        <img
          src={jupiter}
          className="absolute top-[45%] -translate-y-1/2 right-56 scale-150 brightness-75"
        />
        <ShootingStars />
        <StarsBackground />
      </div>
      {/* Subsection */}
      <div className="absolute bottom-0 w-screen h-40 bg-space-gray px-12 py-8 flex justify-between items-center">
        <SubSection title="Distance from Sun" value="XXX,XXX,XXX" unit="MI" />
        <VerticalDivider className="bg-black" />
        <SubSection title="Length of Year" value="4,333" unit="Days" />
        <VerticalDivider className="bg-black" />
        <SubSection title="Axial Tilt" value="3.13" unit="Degrees" />
      </div>
    </div>
  );
}
