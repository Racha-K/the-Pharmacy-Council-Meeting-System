"use server";
import { cookies } from "next/headers";

async function getCookie({ name }: { name: string }) {
  const cookieStore = await cookies();
  return cookieStore.get(name);
}

async function setCookie({ name, value }: { name: string; value: string }) {
  const cookieStore = await cookies();
  cookieStore.set(name, value);
}

async function removeCookie({ name }: { name: string }) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}

export { getCookie, setCookie, removeCookie };
