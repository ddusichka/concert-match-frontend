import React, { useState } from "react";
import {
  Box,
  Image,
  Stack,
  Flex,
  Heading,
  Text,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { CheckIcon, AddIcon } from "@chakra-ui/icons";
import { Match } from "@/types";
import { formatDateTime } from "@/utils/clientUtils";
import { postWithUsername } from "@/utils/serverUtils";

type Props = {
  match: Match;
};

export default function ConcertCard({ match }: Props) {
  const { image_url, name, venue, city, state } = match.concert;
  const [icon, setIcon] = useState(match.favorite ? "check" : "add"); // Initial icon state

  const toggleIcon = () => {
    setIcon(icon === "check" ? "add" : "check");
    const endpoint = `http://localhost:8000/matches/favorite/${match.id}`;
    postWithUsername(endpoint);
  };

  return (
    <Box
      flex={1}
      maxW="md"
      backgroundColor="brand.paper.600"
      color="white"
      px="6"
    >
      <Image src={image_url} alt={name} borderRadius="lg" maxW="sm" />
      <Stack mt="6" spacing="0">
        <Flex justifyContent={"space-between"}>
          <Heading size="md" maxW={325} overflowWrap="normal">
            {name}
          </Heading>
          <IconButton
            onClick={toggleIcon}
            isRound
            size="xs"
            variant={icon === "check" ? "solid" : "outline"}
            color={icon === "check" ? "black" : "white"}
            backgroundColor={icon === "check" ? "brand.primary" : "brand.gray"}
            aria-label={icon === "check" ? "Remove from list" : "Add to list"}
            icon={icon === "check" ? <CheckIcon /> : <AddIcon />}
          />
        </Flex>
        <Text>
          {venue} ({city}, {state})
        </Text>
        <Text>{formatDateTime(match)}</Text>
        <Text fontSize="sm">
          Price range: ${match.concert.min_price} -{" $"}
          {match.concert.max_price}
        </Text>
        <Button
          mt={6}
          width="3xs"
          backgroundColor="brand.primary"
          color="white"
          onClick={() => window.open(match.concert.url, "_blank")}
        >
          Buy tickets
        </Button>
      </Stack>
    </Box>
  );
}
