import { AddIcon } from "@chakra-ui/icons";
import {
  List,
  ListItem,
  ListIcon,
  Image,
  Box,
  Flex,
  Text,
  SimpleGrid,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import React from "react";

type Props = { match: Match };

export default function StatCard({ match }: Props) {
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
        </Flex>
        <SimpleGrid columns={8}>
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
