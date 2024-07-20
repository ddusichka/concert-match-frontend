import { Match } from "@/types";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import AlbumRow from "./AlbumRow";
import PlaylistHeader from "./PlaylistHeader";

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
    <Box color="brand.white">
      <Flex direction={"column"} gap={2}>
        <Flex direction={"row"} gap={0}>
          <Stat>
            <StatLabel fontSize={20}>Liked albums</StatLabel>
            <StatNumber fontSize={28}>{match.albums.length}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel fontSize={20}>Liked tracks</StatLabel>
            <StatNumber fontSize={28}>
              {match.albums.reduce(
                (total, album) => total + album.tracks.length,
                0
              )}
            </StatNumber>
          </Stat>
          <Stat>
            <StatLabel fontSize={20}>First saved on</StatLabel>
            <StatNumber fontSize={28}>{findEarliestAddedAtDate()}</StatNumber>
          </Stat>
        </Flex>

        <Stack gap="2" overflowX={"scroll"} maxHeight={"300px"}>
          <PlaylistHeader />
          {match.albums.map((album) => (
            <AlbumRow album={album} />
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}
