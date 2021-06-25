import express from "express";
import { saveHuta, readHutas, filterHutas, getHutaById } from "./hutas";
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
  } catch (error) {
    next(error);
  }
});

export default router;
