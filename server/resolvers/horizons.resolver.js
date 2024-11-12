import axios from "axios";

// TODO: make response START_TIME = current date and time
// TODO: make response STOP_TIME = START_TIME + 24 hours

const horizonsResolver = async () => {
  try {
    const response = await axios.get(
      "https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='599'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='VECTORS'&CENTER='@sun'&START_TIME='2024-11-11'&STOP_TIME='2024-11-12'&STEP_SIZE='1d'"
    );

    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from NASA Horizons API");
  }
};

export default horizonsResolver;
