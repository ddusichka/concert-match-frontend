"use client";
import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import MatchCard from "./MatchCard";
import { getAuthSession, getWithUsername } from "@/utils/serverUtils";
import { Match } from "@/types";

const MatchList = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    async function fetchMatches() {
      const session = await getAuthSession();
      const endpoint = "http://localhost:8000/matches";
      getWithUsername(endpoint, session)
        .then((response: any) => {
          setMatches(response);
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
        });
    }

    fetchMatches();
  }, []);

  return (
    <Flex direction="column" gap={4}>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </Flex>
  );
};

export default MatchList;
