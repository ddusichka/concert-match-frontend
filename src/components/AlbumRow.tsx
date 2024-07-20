import { Album } from "@/types";
import { formatDate } from "@/utils/clientUtils";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

type Props = { album: Album };

export default function AlbumRow({ album }: Props) {
  return (
    <Grid templateColumns="30px 2fr 1fr 80px" gap={4}>
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
  );
}
