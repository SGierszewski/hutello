import { ObjectId } from "bson";

export type Dog = {
  dogPicture?: string;
  dogName: string;
  sex?: string;
  dateOfBirth: string;
  breed: string;
  size: number;
  weight: number;
};

export type User = {
  _id?: ObjectId;
  profilePicture?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  streetName?: string;
  postcode?: number;
  city?: string;
  document?: string;
  dogs: Dog[];
};

export type Huta = {
  _id?: ObjectId;
  name: string;
  city: string;
};
