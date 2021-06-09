import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
const { PORT = 3000 } = process.env;

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`boilerplate listening at http://localhost:${PORT}`);
});
