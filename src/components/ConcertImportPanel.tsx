"use client";
import React, { useState } from "react";
import { Input, Button, Box, Text } from "@chakra-ui/react";
import MarketDropdown from "./MarketDropdown";

type Props = {};

export default function ConcertImportPanel({}: Props) {
  const [market, setMarket] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [size, setSize] = useState<number>();
  const [page, setPage] = useState<number>();
  const [fetchedConcerts, setFetchedConcerts] = useState<any[]>([]);

  const handleMarketChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    // Convert the string value back to a number before updating the state
    const newValue = parseInt(event.target.value, 10);
    setMarket(newValue);
  };

  const formatISODate = (date: string) =>
    date ? new Date(date).toISOString().split(".")[0] + "Z" : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = "http://localhost:8000/concerts/fetch/";

    const formattedStartDate = formatISODate(startDate);
    const formattedEndDate = formatISODate(endDate);
    const requestBody = {
      marketId: market,
      startDateTime: formattedStartDate,
      endDateTime: formattedEndDate,
      size,
      page,
    };
    console.log(requestBody);
    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(fetchedConcerts);
        setFetchedConcerts(data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      backgroundColor={"white"}
      color="black"
    >
      <MarketDropdown value={market} onChange={handleMarketChange} />
      <Input
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        type="date"
      />
      <Input
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        type="date"
      />
      <Input
        placeholder="Size"
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        type="number"
      />
      <Input
        placeholder="Page"
        value={page}
        onChange={(e) => setPage(Number(e.target.value))}
        type="number"
      />
      <Button mt={4} colorScheme="blue" type="submit">
        Submit
      </Button>
      <Text>
        {fetchedConcerts &&
          fetchedConcerts.length > 0 &&
          fetchedConcerts.map((artist) => <p key={artist}>{artist}</p>)}
      </Text>
    </Box>
  );
}
