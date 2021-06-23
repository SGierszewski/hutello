import express from "express";
import { saveUser, readUsers, readUser } from "./users";

const router = express.Router();

router.post("/users", async (req, res) => {
  await saveUser(req.body);
  res.send("New user signed up");
});

router.get("/users", async (_req, res) => {
  const users = await readUsers();
  res.json(users);
});

router.get("/users/:email", async (req, res) => {
  const user = await readUser(req.params.email);
  res.json(user);
});

export default router;
