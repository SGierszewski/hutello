import React, { useState } from "react";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import BackButton from "../../components/BackButton/BackButton";
import AddDog from "../../components/AddDog/AddDog";
import AddFile from "../../components/AddFile/AddFile";
import IconButton from "../../components/IconButton/IconButton";
import { useHistory } from "react-router";
import type { Dog, User } from "../../../types";
import UserIcon from "../../components/Icons/UserIcon";
import { postUser, uploadImage } from "../../../utils/api";
import RadioInput from "../../components/RadioInput/RadioInput";
import styles from "./Register.module.css";

export default function RegisterPage(): JSX.Element {
  const history = useHistory();
  const [imageSrc, setUserImageSrc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [documentImageSrc, setDocumentImageSrc] = useState("");
  const [dogImageSrc, setDogImageSrc] = useState("");
  const [dogName, setDogName] = useState("");
  const [sex, setSex] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");

  async function handleSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dog: Dog = {
      dogImageSrc,
      dogName,
      breed,
      dateOfBirth,
      sex,
      size: Number(size),
      weight: Number(weight),
    };
    const user: User = {
      imageSrc,
      email,
      password,
      firstName,
      lastName,
      streetName,
      postcode: Number(postcode),
      city,
      documentImageSrc,
      dogs: [dog],
    };
    await postUser(user);
    history.push("/");
  }

  async function handleUserImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const imageFile = event.target.files?.item(0);
    if (!imageFile) {
      return;
    }
    const imagePath = await uploadImage(imageFile);
    setUserImageSrc(imagePath.secure_url);
  }

  async function handleDocumentImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const imageFile = event.target.files?.item(0);
    if (!imageFile) {
      return;
    }
    const imagePath = await uploadImage(imageFile);
    setDocumentImageSrc(imagePath.secure_url);
  }

  async function handleDogImageUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const imageFile = event.target.files?.item(0);
    if (!imageFile) {
      return;
    }
    const imagePath = await uploadImage(imageFile);
    setDogImageSrc(imagePath.secure_url);
  }

  return (
    <div className={styles.register__container}>
      <header className={styles.register__container_header}>
        <BackButton />
        <h2 className={styles.register__container_title}>Registration</h2>
      </header>
      <form className={styles.registerForm} onSubmit={handleSignUp}>
        <div className={styles.registerForm__userSection}>
          <AddFile
            label="Add a profile picture"
            accept=".jpg, .png"
            multiple={false}
            onChange={handleUserImageUpload}
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
          <span className={styles.registerForm__subsection}>
            <LabeledInput
              type="number"
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
          </span>
          <AddFile
            label="Add a document"
            accept=".jpg, .png"
            multiple={true}
            onChange={handleDocumentImageUpload}
          />
        </div>
        <div className={styles.registerForm__dogSection}>
          <h2 className={styles.registerForm__dogSection_title}>Add a dog</h2>
          <AddFile
            label="Add a dog picture"
            accept=".jpg, .png"
            multiple={false}
            onChange={handleDogImageUpload}
          />
          <LabeledInput
            label="Dog name"
            value={dogName}
            required={true}
            onChange={setDogName}
          />
          <h3 className={styles.registerForm__radioTitle}>Choose sex</h3>
          <span>
            <RadioInput
              label="Female"
              type="radio"
              name="sex"
              value="female"
              required={true}
              onChange={setSex}
            />
            <RadioInput
              label="Male"
              type="radio"
              name="sex"
              value="male"
              required={true}
              onChange={setSex}
            />
          </span>
          <LabeledInput
            label="Date of birth"
            type="date"
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
          <span className={styles.registerForm__dogSubsection}>
            <LabeledInput
              label="Size (cm)"
              type="number"
              value={size}
              required={true}
              onChange={setSize}
            />
            <LabeledInput
              label="Weight (kg)"
              type="number"
              value={weight}
              required={false}
              onChange={setWeight}
            />
          </span>
        </div>
        <AddDog label="Add another dog" />
        <IconButton onClick={() => history.push("/profile")} title="Sign up">
          {<UserIcon />}
        </IconButton>
      </form>
    </div>
  );
}
