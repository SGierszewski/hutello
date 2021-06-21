import dotenv from "dotenv";
import { connectDatabase } from "./utils/database";

dotenv.config();

import express from "express";
import path from "path";
import { readUsers, saveUser } from "./utils/users";

const app = express();
const { PORT = 3000 } = process.env;

if (process.env.MONGO_URL === undefined) {
  throw new Error("Missing env MONGO_URL");
}

app.use(express.json());

app.post("/api/users", async (req, res) => {
  await saveUser(req.body);
  res.send("New user signed up");
});

app.get("/api/users", async (_req, res) => {
  const users = await readUsers();
  res.json(users);
});

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

connectDatabase(process.env.MONGO_URL).then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Hutello listening at http://localhost:${PORT}`);
  });
});
