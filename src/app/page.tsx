import React from "react";
import { getAuthSession } from "@/utils/serverUtils";
import { redirect } from "next/navigation";
import MatchList from "@/components/MatchList";
import { Heading } from "@chakra-ui/react";

export default async function Home() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <MatchList />
    </div>
  );
}
