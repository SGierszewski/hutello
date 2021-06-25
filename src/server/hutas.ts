import { ObjectId } from "mongodb";
import type { Huta } from "../types";
import { getHutasCollection } from "./database";

export const saveHuta = async (huta: Huta): Promise<void> => {
  await getHutasCollection().insertOne({ ...huta });
};

export const readHutas = async (): Promise<Huta[]> => {
  return await getHutasCollection().find().sort({ name: 1 }).toArray();
};

export const filterHutas = async (city: string): Promise<Huta[]> => {
  return await getHutasCollection().find({ city }).sort({ name: 1 }).toArray();
};

export const getHutaById = async (_id: string): Promise<Huta | null> => {
  const hutaResult = await getHutasCollection().findOne({
    _id: new ObjectId(_id),
  });
  return hutaResult;
};
