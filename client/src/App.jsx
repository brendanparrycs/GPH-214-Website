import { useEffect } from "react";
import TitleScreen from "./components/screens/titleScreen";
import axios from "axios";

export default function App() {
  useEffect(() => {
    axios.get("http://localhost:4000/api/horizons").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <TitleScreen />
      <div className="w-screen h-screen bg-red-500"></div>
    </>
  );
}
