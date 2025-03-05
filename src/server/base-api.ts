"use server";
import { cookies } from "next/headers";

interface BaseApiProps {
  path: string;
  params?: Record<string, string>;
  config?: RequestInit;
  requiresAuth?: boolean;
  baseUrl?: string;
}

async function BaseApi({
  path,
  params,
  config,
  requiresAuth,
  baseUrl = "https://service.pharmacycouncil.org",
}: BaseApiProps): Promise<unknown> {
  try {
    const token = (await cookies()).get("access_token")?.value;
    const queryString = params ? new URLSearchParams(params).toString() : "";
    const fullUrl = `${baseUrl}${path}${queryString ? `?${queryString}` : ""}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (config?.headers) {
      Object.assign(headers, config.headers);
    }
    if (requiresAuth) {
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    // เรียกใช้ API พร้อม config ที่กำหนด
    const response = await fetch(fullUrl, {
      headers,
      ...config,
    });

    // ตรวจสอบสถานะการตอบกลับ
    if (!response.ok) {
      // throw new Error(`HTTP error! Status: ${response.status}`);
      return { message: response.statusText, status: response.status };
    }

    // แปลงข้อมูลเป็น JSON
    const data = await response.json();
    return {
      data: data,
      status: response.status,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export { BaseApi };
