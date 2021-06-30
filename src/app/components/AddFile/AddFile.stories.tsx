import React from "react";
import AddFile from "./AddFile";

export default {
  title: "Component / AddFile",
  component: AddFile,
};

export const AddProfilePicture = (): JSX.Element => (
  <AddFile
    label="Add a profile picture"
    accept=".jpg, .png"
    multiple={false}
    imageSrc="#"
    onChange={console.log}
  />
);

export const AddDogPicture = (): JSX.Element => (
  <AddFile
    label="Add a dog picture"
    accept=".jpg, .png"
    multiple={false}
    imageSrc="#"
    onChange={console.log}
  />
);

export const AddDocument = (): JSX.Element => (
  <AddFile
    label="Add a document"
    accept=".pdf"
    multiple={false}
    imageSrc="#"
    onChange={console.log}
  />
);
