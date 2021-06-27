import React, { useState } from "react";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import BackButton from "../../components/BackButton/BackButton";
import AddDog from "../../components/AddDog/AddDog";
import AddFile from "../../components/AddFile/AddFile";
import IconButton from "../../components/IconButton/IconButton";
import { useHistory } from "react-router";
import type { User } from "../../../types";
import UserIcon from "../../components/Icons/UserIcon";
import { postUser } from "../../../utils/api";

export default function RegisterPage(): JSX.Element {
  const history = useHistory();
  //   const [profilePicture, setProfilePicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  // const [document, setDocument] = useState("");
  // const [dogPicture, setDigPicture] = useState("");
  const [dogName, setDogName] = useState("");
  //   const [sex, setSex] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user: User = {
      // profilePicture,
      email,
      password,
      firstName,
      lastName,
      streetName,
      postcode,
      city,
      // document,
      dogName,
      // sex,
      dateOfBirth,
      breed,
      size,
      weight,
    };
    await postUser(user);
    history.push("/");
  }

  return (
    <div>
      <header>
        <BackButton />
        <h2>Registration</h2>
      </header>
      <form onSubmit={handleSignUp}>
        <AddFile
          label="Add a profile picture"
          id="profilePicture"
          name="fileUpload"
          accept=".jpg, .png"
          multiple={false}
        />
        <LabeledInput
          label="Email address"
          value={email}
          type="email"
          required={true}
          onChange={setEmail}
        />
        <LabeledInput
          label="Password"
          value={password}
          type="password"
          required={true}
          onChange={setPassword}
        />
        <LabeledInput
          label="First name"
          value={firstName}
          required={true}
          onChange={setFirstName}
        />
        <LabeledInput
          label="Last name"
          value={lastName}
          required={true}
          onChange={setLastName}
        />
        <LabeledInput
          label="Street name"
          value={streetName}
          required={false}
          onChange={setStreetName}
        />
        <div>
          <LabeledInput
            label="Postcode"
            value={postcode}
            required={false}
            onChange={setPostcode}
          />
          <LabeledInput
            label="City"
            value={city}
            required={false}
            onChange={setCity}
          />
        </div>
        <AddFile
          label="Add a document"
          id="document"
          name="fileUpload"
          accept=".pdf"
          multiple={true}
        />
        <h2>Add a dog</h2>
        <AddFile
          label="Add a profile picture"
          id="dogPicture"
          name="fileUpload"
          accept=".jpg, .png"
          multiple={false}
        />
        <LabeledInput
          label="Dog name"
          value={dogName}
          required={true}
          onChange={setDogName}
        />
        //Radio button component
        <LabeledInput
          label="Date of birth"
          value={dateOfBirth}
          required={true}
          onChange={setDateOfBirth}
        />
        <LabeledInput
          label="Breed"
          value={breed}
          required={false}
          onChange={setBreed}
        />
        <div>
          <LabeledInput
            label="Size (cm)"
            value={size}
            required={true}
            onChange={setSize}
          />
          <LabeledInput
            label="Weight (kg)"
            value={weight}
            required={false}
            onChange={setWeight}
          />
        </div>
        <AddDog label="Add another dog" />
        <IconButton title="Sign up">{<UserIcon />}</IconButton>
      </form>
    </div>
  );
}
