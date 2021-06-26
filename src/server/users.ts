import type { User } from "../types";
import { getUsersCollection } from "./database";

export const saveUser = async (user: User): Promise<void> => {
  await getUsersCollection().insertOne({ ...user });
};

export const readUsers = async (): Promise<User[]> => {
  return await getUsersCollection().find().sort({ lastName: 1 }).toArray();
};

export const readUser = async (user: Partial<User>): Promise<User | null> => {
  return await getUsersCollection().findOne(user, {
    projection: { password: 0 },
  });
};
