export const verifyOTP = async (email: string, otp: string) => {
  try {
    const response = await fetch("https://ngo-volunteer-2.onrender.com/otp/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    return await response.json();
  } catch (error) {
    throw new Error("Something went wrong while verifying OTP.");
  }
};

export const resendOTP = async (email: string) => {
  try {
    const response = await fetch("https://ngo-volunteer-2.onrender.com/otp/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    return await response.json();
  } catch (error) {
    throw new Error("Something went wrong while resending OTP.");
  }
};