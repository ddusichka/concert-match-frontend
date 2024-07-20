import { Album } from "@/types";
import { List, ListItem, Image, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

type Props = { album: Album };

export default function AlbumCard({ album }: Props) {
  return (
    <Box>
      <Heading size="xs">{album.name}</Heading>
      <Flex gap={2}>
        <Image
          src={album.image_url}
          alt={album.name}
          borderRadius="lg"
          boxSize="100px"
          objectFit="cover"
        />
        <List>
          {album.tracks.map((track) => (
            <ListItem
              key={track.id}
              display="flex"
              alignItems="center"
              fontSize={14}
            >
              {track.name}
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  );
}
