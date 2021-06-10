import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";

const app = express();
const { PORT = 3000 } = process.env;

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`boilerplate listening at http://localhost:${PORT}`);
});
