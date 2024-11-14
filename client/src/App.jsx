import { useEffect, useState } from "react";
import TitleScreen from "./components/screens/titleScreen";
import axios from "axios";
import ComparisonScreen from "./components/screens/comparisonScreen";
import SimulationScreen from "./components/screens/simulationScreen";
import LoadingScreen from "./components/screens/loadingScreen";

export default function App() {
  // TODO: Add a loading animation when waiting for the query to finish
  // TODO: Add a backup incase the query errors
  const [horizonsData, setHorizonsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://us-west2-gph-214-website.cloudfunctions.net/nasa-horizons")
      .then((response) => {
        setHorizonsData(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <TitleScreen horizonsData={horizonsData} />
      <ComparisonScreen />
      <SimulationScreen />
    </>
  );
}
