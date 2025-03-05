import { CreateProfileFormData } from "../types";

const createProfile = async (data: CreateProfileFormData) => {
  const response = await fetch("https://thebteam.free.beeceptor.com/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("API request failed");
  return response.json();
};

export default createProfile;
