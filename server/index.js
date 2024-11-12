import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import horizonsResolver from "./resolvers/horizons.resolver.js";

// start express app and configure .env variables
const app = express();
dotenv.config();

// configure cors
app.use(
  cors({
    origin: `http://localhost:${process.env.ORIGIN}`,
    credentials: true,
  })
);

// add horizons api to server
app.get("/api/horizons", async (_, res) => {
  try {
    const data = await horizonsResolver();
    res.json(data);
  } catch (error) {
    res.status(500);
  }
});

// start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
