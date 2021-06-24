import express from "express";
import { saveHuta, readHutas, searchHutas } from "./hutas";
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

router.get("/hutas", async (_req, res) => {
  const hutas = await readHutas();
  res.json(hutas);
});

router.get("/hutas/:id", async (_req, res) => {
  const hutas = await readHutas();
  res.json(hutas);
});

router.get("/search", async (req, res, next) => {
  try {
    const { query } = req.query;
    if (typeof query.city !== "string") {
      res.status(400).send("Keyword is not valid");
      return;
    }
    const searchResult = await searchHutas(query.city);
    res.status(200).json(searchResult);
  } catch (error) {
    next(error);
  }
});

export default router;
