import React from "react";
import Link from "next/link";
import { Button, Image } from "@chakra-ui/react";
import { getAuthSession } from "@/utils/serverUtils";
import AdminPanel from "@/components/AdminPanel";

export default async function Home() {
  const session = await getAuthSession();

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
      <AdminPanel />
    </div>
  );
}
