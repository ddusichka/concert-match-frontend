import { Box, Grid, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function PlaylistHeader({}: Props) {
  return (
    <Grid templateColumns="40px 2fr 1fr 80px" gap={4} color="gray">
      <Text fontSize="sm" gridColumn="1 / span 2" textAlign="left">
        Album
      </Text>
      <Text fontSize="sm">Release date</Text>
      <Box textAlign="right">
        <Text fontSize="sm">Liked tracks</Text>
      </Box>
    </Grid>
  );
}
