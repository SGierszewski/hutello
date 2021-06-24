import type { Huta } from "../types";
import { getHutasCollection } from "./database";

export const saveHuta = async (huta: Huta): Promise<void> => {
  await getHutasCollection().insertOne({ ...huta });
};

export const readHutas = async (): Promise<Huta[]> => {
  return await getHutasCollection().find().sort({ name: 1 }).toArray();
};
