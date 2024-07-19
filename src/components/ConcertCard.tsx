import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

import React from "react";
import AlbumCard from "./AlbumCard";
import StatCard from "./StatCard";

type Props = {
  match: Match;
};

export default function ConcertCard({ match }: Props) {
  return (
    <Card>
      <CardBody>
        <Flex>
          <Box>
            <Image
              src={match.concert.image_url}
              alt={match.concert.name}
              borderRadius="lg"
              maxW="md"
            />
            <Stack mt="6" spacing="0">
              <Heading size="md" mb="4">
                {match.concert.name}
              </Heading>
              <Text>
                {match.concert.venue} {"("}
                {match.concert.city}, {match.concert.state}
                {")"}
              </Text>
              <Text>
                {format(
                  parseISO(
                    `${match.concert.local_date}T${match.concert.local_time}`
                  ),
                  "MMMM d, yyyy 'at' h:mm a"
                )}
              </Text>
              <Text fontSize="md">
                Price range: {match.concert.min_price} -{" "}
                {match.concert.max_price}
              </Text>
            </Stack>
          </Box>
          <Box p="5" borderWidth="1px" borderRadius="lg">
            <Heading size="md" mb="4">
              Liked Tracks
            </Heading>
            <StatCard match={match} />
            {/* <SimpleGrid columns={3} spacing={1}>
              {match.albums.map((album) => (
                <AlbumCard key={album.name} album={album} />
              ))}
            </SimpleGrid> */}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
