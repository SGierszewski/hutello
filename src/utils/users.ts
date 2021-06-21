import type { User } from "../types";
import { getUsersCollection } from "./database";

export const saveUser = async (user: User): Promise<void> => {
  await getUsersCollection().insertOne({ ...user });
};
