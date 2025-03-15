"use server";

import { cookies } from "next/headers";

interface LoginProps {
  license: string;
  password: string;
}

export async function login({ license, password }: LoginProps) {
  const apiKey = "f49f0b4de69b269ad8fd029c7e8ae41d45023049361ff973185756990456bda7";

  const formData = new FormData();
  formData.append("license", license);
  formData.append("password", password);
  formData.append("apikey", apiKey);

  const response = await fetch("https://service.pharmacycouncil.org/v1.0/login", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    return { success: false, error: "Invalid credentials" };
  }
  const data = await response.json();
  if (data.error_code === 0) {
    (await cookies()).set("access_token", data.data.access_token, {
      // httpOnly: true,
      // secure: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    (await cookies()).set("license_id", data.data.license_id, {
      // httpOnly: true,
      // secure: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return { success: true, data };
  }
  return { success: false, error: data.error_message };
}
