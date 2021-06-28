import express from "express";
import { saveHuta, readHutas, filterHutas, getHutaById } from "./hutas";
import { saveUser, readUsers } from "./users";
import { saveUser, readUsers, readUser } from "./users";
import { ObjectID } from "mongodb";

const router = express.Router();

router.post("/users", async (req, res) => {
  await saveUser(req.body);
  res.send("New user signed up");
});

router.get("/users", async (_req, res) => {
  const users = await readUsers();
  res.json(users);
});

router.post("/hutas", async (req, res) => {
  await saveHuta(req.body);
  res.send("New HuTa added to DB");
});

router.get("/hutas", async (req, res) => {
  const { city } = req.query;
  if (typeof city !== "string") {
    res.status(400).send("Keyword is not valid");
    return;
  }
  if (city) {
    const hutas = await filterHutas(city);
    res.json(hutas);
    return;
  }
  const hutas = await readHutas();
  res.json(hutas);
});

router.get("/hutas/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const hutaResult = await getHutaById(_id);
    res.status(200).json(hutaResult);

// User login
router.post("/users/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await readUser({ email, password });
    if (!user) {
      res.status(404).send("Email or password incorrect");
      return;
    }
    res.setHeader(
      "Set-Cookie",
      `userID=${user._id};path=/;Max-Age=${365 * 24 * 60 * 60}`
    );
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

// Check user login
router.get("/users/me", async (req, res, next) => {
  try {
    const { userID } = req.cookies;
    if (!userID) {
      return res.status(401).end("Access denied! Please login first.");
    }
    const user = await readUser({ _id: new ObjectID(userID) });
    if (!user) {
      res.status(404).send("User not found.");
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
