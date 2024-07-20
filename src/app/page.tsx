import React from "react";
import Link from "next/link";
import { Button, Image } from "@chakra-ui/react";
import { getAuthSession } from "@/utils/serverUtils";

export default async function Home() {
  const session = await getAuthSession();

  // if (!session) {
  //   redirect("/login");
  // }

  function fetchTicketmaster() {
    const endpoint = "http://localhost:8000/concerts/";

    return fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) =>
        console.error("There was a problem with your fetch operation:", error)
      );
  }

  return (
    <div>
      {session ? (
        <>
          <h1>welcome, {session.user.name}!</h1>
          {session.user.picture && (
            <Image
              src={session.user.picture}
              alt="spotify logo"
              width={50}
              height={50}
              rounded={24}
            />
          )}
        </>
      ) : (
        <Link href="/matches">
          <Button backgroundColor={"#1ED760"}>Login with Spotify</Button>{" "}
        </Link>
      )}
      <Link href="/matches">
        <Button backgroundColor={"#1ED760"}>Re-import Spotify library</Button>{" "}
      </Link>
      <Link href="/matches">
        <Button>View all matching concerts</Button>
      </Link>
      <Link href="/matches">
        <Button>View saved concerts</Button>
      </Link>
    </div>
  );
}
