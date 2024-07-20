import React from "react";
import { Image } from "@chakra-ui/react";

export default function Logos() {
  return (
    <div>
      <Image
        src={"/spotify.png"}
        alt={"spotify logo"}
        borderRadius="lg"
        boxSize="100px"
        objectFit="cover"
      />{" "}
      <Image
        src={"/ticketmaster.png"}
        alt={"ticketmaster logo"}
        borderRadius="lg"
        boxSize="100px"
        objectFit="cover"
      />
    </div>
  );
}
