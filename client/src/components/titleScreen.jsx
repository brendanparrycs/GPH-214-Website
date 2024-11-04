import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import jupiter from "../images/jupiter.png";

export default function TitleScreen() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="absolute top-[40%] left-56 left- left- w-1/3">
        <h1 className="text-orange-500 text-7xl my-4">Jupiter</h1>
        <p className="text-white">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem ipsum odor
          amet, consectetuer adipiscing elit.
        </p>
      </div>
      <img
        src={jupiter}
        className="absolute top-1/2 -translate-y-1/2 right-56 scale-150 brightness-75"
      />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
