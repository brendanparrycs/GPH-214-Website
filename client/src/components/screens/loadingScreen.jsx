import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";

export default function LoadingScreen() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <ShootingStars />
      <StarsBackground />
      <h1 className="text-5xl font-bold">
        Loading
        <span className="animate-blink">.</span>
        <span className="animate-blink" style={{ animationDelay: "0.15s" }}>
          .
        </span>
        <span className="animate-blink" style={{ animationDelay: "0.3s" }}>
          .
        </span>
      </h1>
    </div>
  );
}
