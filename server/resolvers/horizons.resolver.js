import axios from "axios";

const horizonsResolver = async () => {
  try {
    const startTime = new Date().toISOString().split("T")[0];
    const stopTime = new Date(Date.now() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    const response = await axios.get(
      `https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='599'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='VECTORS'&CENTER='@sun'&START_TIME='${startTime}'&STOP_TIME='${stopTime}'&STEP_SIZE='17280'`
    );

    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from NASA Horizons API");
  }
};

export default horizonsResolver;
