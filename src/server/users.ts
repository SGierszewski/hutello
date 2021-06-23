import type { User } from "../types";
import { getUsersCollection } from "./database";

export const saveUser = async (user: User): Promise<void> => {
  await getUsersCollection().insertOne({ ...user });
};

export const readUsers = async (): Promise<User[]> => {
  return await getUsersCollection().find().sort({ lastName: 1 }).toArray();
};

export const readUser = async (email: string): Promise<User | undefined> => {
  const user = await getUsersCollection().findOne({ email });
  if (!user) {
    throw new Error("There is no user with that email adress");
  }
  return user;
};
