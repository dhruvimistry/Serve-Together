export const resetPassword = async (email: string, newPassword: string) => {
  try {
    const response = await fetch("https://ngo-volunteer-2.onrender.com/otp/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, newPassword }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Something went wrong while resetting the password.");
  }
};
