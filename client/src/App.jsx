import { useEffect, useState } from "react";
import TitleScreen from "./components/screens/titleScreen";
import axios from "axios";
import ComparisonScreen from "./components/screens/comparisonScreen";

export default function App() {
  // TODO: Add a loading animation when waiting for the query to finish
  // TODO: Add a backup incase the query errors
  const [horizonsData, setHorizonsData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/horizons").then((response) => {
      setHorizonsData(response.data);
    });
  }, []);

  return (
    <>
      <TitleScreen horizonsData={horizonsData} />
      <ComparisonScreen />
    </>
  );
}
