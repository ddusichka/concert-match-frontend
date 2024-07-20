import { Match } from "@/types";
import {
  Image,
  Box,
  Flex,
  Text,
  SimpleGrid,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";

type Props = { match: Match };

export default function StatCard({ match }: Props) {
  function findEarliestAddedAtDate(): string {
    let earliestDate: Date | null = null;

    match.albums.forEach((album) => {
      album.tracks.forEach((track) => {
        const trackDate = new Date(track.added_at);
        if (earliestDate === null || trackDate < earliestDate) {
          earliestDate = trackDate;
        }
      });
    });

    if (earliestDate === null) {
      return "Unknown";
    }
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    return new Intl.DateTimeFormat("en-US", options).format(earliestDate);
  }

  return (
    <Box>
      <Flex direction={"column"} gap={2}>
        <Flex>
          <Stat>
            <StatLabel>Liked albums</StatLabel>
            <StatNumber>{match.albums.length}</StatNumber>
          </Stat>{" "}
          <Stat>
            <StatLabel>Liked tracks</StatLabel>
            <StatNumber>
              {match.albums.reduce(
                (total, album) => total + album.tracks.length,
                0
              )}
            </StatNumber>
          </Stat>
          <Stat>
            <StatLabel>First added to library on</StatLabel>
            <StatNumber>{findEarliestAddedAtDate()}</StatNumber>
          </Stat>
        </Flex>
        <SimpleGrid minChildWidth="100px" rowGap={2}>
          {match.albums.map((album) => (
            <Image
              src={album.image_url}
              alt={album.name}
              borderRadius="lg"
              boxSize="100px"
              objectFit="cover"
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
