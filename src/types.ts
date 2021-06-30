import { ObjectId } from "bson";

export type Dog = {
  dogImageSrc?: string;
  dogName: string;
  sex?: string;
  dateOfBirth: string;
  breed: string;
  size: number;
  weight: number;
};

export type User = {
  _id?: ObjectId;
  imageSrc?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  streetName?: string;
  postcode?: number;
  city?: string;
  documentImageSrc?: string;
  dogs: Dog[];
};

export type Huta = {
  _id?: ObjectId;
  name: string;
  city: string;
};

export type CloudinaryResult = {
  access_mode: string;
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: false;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: [];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};
