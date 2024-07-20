"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button, Image } from "@chakra-ui/react";
import { set } from "date-fns";
import {
  getWithAccessToken,
  getAuthSession,
  getWithUsername,
} from "@/utils/serverUtils";

type Props = {};

export default function AdminPanel({}: Props) {
  const [importLoading, setImportLoading] = useState(false);

  async function importLibrary() {
    setImportLoading(true);
    const session = await getAuthSession();
    const endpoint = "http://localhost:8000/tracks/all-tracks/";

    return getWithAccessToken(endpoint, session)
      .then((response: any) => {
        setImportLoading(false);
      })
      .catch((error) => {
        setImportLoading(false);
        console.error("There was a problem with your fetch operation:", error);
      });
  }

  async function createMatches() {
    setImportLoading(true);
    const session = await getAuthSession();
    const endpoint = "http://localhost:8000/matches/create";

    return getWithUsername(endpoint, session)
      .then((response: any) => {
        setImportLoading(false);
      })
      .catch((error) => {
        setImportLoading(false);
        console.error("There was a problem with your fetch operation:", error);
      });
  }

  return (
    <div>
      <Button
        isLoading={importLoading}
        onClick={importLibrary}
        backgroundColor={"#1ED760"}
      >
        Re-import Spotify library
      </Button>
      <Button onClick={createMatches}>Create updated matches</Button>
      <Link href="/matches">
        <Button>View all matching concerts</Button>
      </Link>
      <Link href="/matches">
        <Button>View saved concerts</Button>
      </Link>
    </div>
  );
}
