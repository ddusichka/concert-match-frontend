import { Flex, Box } from "@chakra-ui/react";

import React from "react";
import SpotifyCard from "./SpotifyCard";
import { Match } from "@/types";
import ConcertCard from "./ConcertCard";

type Props = {
  match: Match;
};

export default function MatchCard({ match }: Props) {
  return (
    <Flex py="6" backgroundColor={"brand.paper.600"}>
      <ConcertCard match={match} />
      <Box
        flex={1}
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor={"brand.paper.400"}
        mx="3"
        px="3"
        py="4"
      >
        <SpotifyCard match={match} />
      </Box>
    </Flex>
  );
}
