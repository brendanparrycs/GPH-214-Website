import { http } from "@google-cloud/functions-framework";
import axios from "axios";

/*

If you update this file, make sure to push it to google
cloud functions with the following command:

gcloud functions deploy nasa-horizons --gen2 --runtime=nodejs20 --region=us-west2  --source=. --entry-point=nasa-horizons --trigger-http --allow-unauthenticated

*/

http("nasa-horizons", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  try {
    const startTime = new Date().toISOString().split("T")[0];
    const stopTime = new Date(Date.now() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    const response = await axios.get(
      `https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='599'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='VECTORS'&CENTER='@sun'&START_TIME='${startTime}'&STOP_TIME='${stopTime}'&STEP_SIZE='17280'`
    );

    res.send(response.data);
  } catch (error) {
    res.status(500);
  }
});
