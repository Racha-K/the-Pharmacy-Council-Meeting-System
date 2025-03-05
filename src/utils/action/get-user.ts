"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUser() {
  const cookie = await cookies();
  const accessToken = cookie.get("access_token");
  const licenseId = cookie.get("license_id");

  if (!accessToken || !licenseId) {
    console.log("no access token or license id");
    redirect("/");
  }

  const formData = new FormData();
  formData.append("license", licenseId?.value || "");
  formData.append("access_token", accessToken?.value || "");

  const response = await fetch("https://service.pharmacycouncil.org/v1.0/get_profile", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (data.error_code !== 0) {
    redirect("/");
  }
  return { success: true, data };
}
