import express from "express";
import { saveUser, readUsers } from "./users";

const router = express.Router();

router.post("/users", async (req, res) => {
  await saveUser(req.body);
  res.send("New user signed up");
});

router.get("/users", async (_req, res) => {
  const users = await readUsers();
  res.json(users);
});

export default router;
