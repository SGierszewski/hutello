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

// User login
router.post("/users/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await readUser({ email, password });
    if (!user) {
      res.status(404).send("Email or password incorrect");
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
