import type { User } from "../types";
import { getUsersCollection } from "./../server/database";

export const saveUser = async (user: User): Promise<void> => {
  await getUsersCollection().insertOne({ ...user });
};

export const readUsers = async (): Promise<User[]> => {
  return await getUsersCollection().find().sort({ lastName: 1 }).toArray();
};
