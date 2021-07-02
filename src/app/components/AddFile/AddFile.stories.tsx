import React from "react";
import { Story } from "@storybook/react";
import AddFile, { AddFileProps } from "./AddFile";

export default {
  title: "Component / AddFile",
  component: AddFile,
};

const Template: Story<AddFileProps> = (args) => <AddFile {...args} />;

export const Default = Template.bind({});

export const addProfilePicture = Template.bind({});
addProfilePicture.args = {
  label: "Add a profile picture",
  accept: ".jpg, .png",
  multiple: false,
};

export const addDogPicture = Template.bind({});
addDogPicture.args = {
  label: "Add a dog picture",
  accept: ".jpg, .png",
  multiple: false,
};

export const addDocumentPicture = Template.bind({});
addDocumentPicture.args = {
  label: "Add a profile picture",
  accept: ".jpg, .png",
  multiple: false,
};
