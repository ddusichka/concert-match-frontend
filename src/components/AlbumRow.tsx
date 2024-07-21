import React, { useState } from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Album } from "@/types";
import { formatDate } from "@/utils/clientUtils";

type Props = { album: Album };

export default function AlbumRow({ album }: Props) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Grid
        templateColumns="30px 2fr 1fr 80px"
        gap={4}
        onClick={() => setClicked(!clicked)}
        _hover={{ cursor: "pointer" }}
      >
        <Image
          src={album.image_url}
          alt={album.name}
          boxSize="30px"
          rounded="4"
        />
        <Text fontSize="sm">{album.name}</Text>
        <Text fontSize="sm">{formatDate(album.release_date)}</Text>
        <Box textAlign="right">
          <Text fontSize="sm">{album.tracks.length}</Text>
        </Box>
      </Grid>
      {clicked && (
        <Text fontSize="xs">
          {album.tracks.reduce((acc, track, index) => {
            return `${acc}${index ? ", " : ""}${track.name}`;
          }, "")}
        </Text>
      )}
    </>
  );
}
