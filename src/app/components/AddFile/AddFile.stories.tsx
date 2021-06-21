import React from "react";
import AddFile from "./AddFile";

export default {
  title: "Component / AddFile",
  component: AddFile,
};

export const AddProfilePicture = (): JSX.Element => (
  <AddFile
    label="Add a profile picture"
    id="profilePicture"
    name="fileUpload"
    accept=".jpg, .png"
    multiple={false}
  />
);

export const AddDogPicture = (): JSX.Element => (
  <AddFile
    label="Add a dog picture"
    id="dogPicture"
    name="fileUpload"
    accept=".jpg, .png"
    multiple={false}
  />
);

export const AddDocument = (): JSX.Element => (
  <AddFile
    label="Add a document"
    id="document"
    name="fileUpload"
    accept=".pdf"
    multiple={false}
  />
);
