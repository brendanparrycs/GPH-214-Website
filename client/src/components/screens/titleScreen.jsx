import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import jupiter from "../../images/jupiter.png";
import MobileSlider from "../mobileSlider";

export default function TitleScreen() {
  // TODO: add scaling for larger devices

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* Main */}
      <div className="relative flex-grow bg-black flex items-center px-8">
        <div className="flex flex-col gap-4 w-11/12 z-20">
          <h1 className="text-orange-500 text-4xl font-bold">Jupiter</h1>
          <p className="text-sm">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum
            odor amet, consectetuer adipiscing elit.
          </p>
        </div>
        <img
          src={jupiter}
          className="absolute -translate-x-2 translate-y-12 scale-[2] brightness-50 z-10"
        />
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="h-1/6 bg-space-gray flex items-center justify-between px-4">
        <MobileSlider />
      </div>
    </div>
  );
}
