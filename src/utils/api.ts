import { CloudinaryResult, User } from "./../types";

export async function postUser(user: User): Promise<User> {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: User = await response.json();
  return result;
}

export async function login(user: Partial<User>): Promise<User> {
  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: User = await response.json();
  return result;
}

export async function uploadImage(imageFile: File): Promise<CloudinaryResult> {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append(
    "upload_preset",
    `${import.meta.env.VITE_CLOUDINARY_PRESET_NAME}`
  );
  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const cloudinaryResult = await cloudinaryResponse.json();
  console.log(1, cloudinaryResult);
  const imageSrc = cloudinaryResult.secure_url;
  console.log(2, imageSrc);
  return imageSrc;
}
