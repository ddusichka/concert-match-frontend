import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

import React from "react";
import StatCard from "./StatCard";
import { Match } from "@/types";

type Props = {
  match: Match;
};

export default function ConcertCard({ match }: Props) {
  return (
    <Card borderWidth="0.5px" borderRadius="lg">
      <CardBody>
        <Flex>
          <Box flex={1} mr={4} maxW="sm">
            <Image
              src={match.concert.image_url}
              alt={match.concert.name}
              borderRadius="lg"
              maxW="xs"
            />
            <Stack mt="6" spacing="0" maxW="sm">
              <Heading size="md" mb="4" overflowWrap={"normal"}>
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
                Price range: ${match.concert.min_price} -{" $"}
                {match.concert.max_price}
              </Text>
              <Stack mt={3}>
                <Button width="3xs">Mark as interested</Button>
                <Button width="3xs" backgroundColor="blue" color="white">
                  Buy tickets
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box flex={1} p="5" borderWidth="1px" borderRadius="lg">
            <Heading mb="4" size={"md"}>
              Library Stats
            </Heading>
            <StatCard match={match} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
