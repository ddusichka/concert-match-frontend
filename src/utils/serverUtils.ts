"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AuthSession } from "@/types";
import { getServerSession } from "next-auth/next";

export const getWithAccessToken = async (
  url: string,
  session: AuthSession | null
) => {
  if (!session) return null;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Network response was not ok, status code: ${response.status}`
    );
  }

  return await response.json();
};

export const getWithUsername = async (
  url: string,
  session: AuthSession | null
) => {
  if (!session) return null;
  const response = await fetch(`${url}/${session.user.sub}`);

  if (!response.ok) {
    throw new Error(
      `Network response was not ok, status code: ${response.status}`
    );
  }

  return await response.json();
};

export const getAuthSession = async () => {
  const session = (await getServerSession(authOptions)) as AuthSession;
  if (!session) {
    return null;
  }

  const currentTimestamp = Math.floor(Date.now());
  if (currentTimestamp >= session.user.expires_at * 1000) {
    return null;
  }

  return session;
};
