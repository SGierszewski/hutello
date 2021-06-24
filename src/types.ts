import { ObjectId } from "bson";

export type User = {
  _id?: ObjectId;
  image?: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  streetName?: string;
  postcode?: number;
  city?: string;
  docs?: string;
};

export type Dog = {
  image: string;
  name: string;
  sex: string;
  dateOfBirth: number;
  breed: string;
  size: number;
  weight: number;
};

export type Huta = {
  _id?: ObjectId;
  name: string;
  city: string;
};
