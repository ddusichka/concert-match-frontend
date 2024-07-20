import { Heading, Flex, Image } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex my={8} color="white" justifyContent={"space-between"}>
      <Heading>Concert Match</Heading>
      <Flex columnGap={4}>
        <Image
          src={"/spotify.png"}
          alt={"spotify logo"}
          borderRadius="lg"
          boxSize="30px"
          objectFit="cover"
        />{" "}
        x
        <Image
          src={"/ticketmaster.png"}
          alt={"ticketmaster logo"}
          borderRadius="lg"
          boxSize="30px"
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
}
