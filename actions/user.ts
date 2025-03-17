import { RegisterUserData, RegisterUserResponse } from "@/types/user";

export const registerUser = async (
  userData: RegisterUserData
): Promise<RegisterUserResponse> => {
  try {
    const response = await fetch(
      `${process.env.PUBLIC_EXPO_API_URL}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    } else {
      console.log("User registered:", data);
      return data;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
