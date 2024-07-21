"use client";
import React, { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import { Market } from "@/types";

type Props = {
  value: number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function MarketDropdown({ value, onChange }: Props) {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/concerts/markets")
      .then((response) => response.json())
      .then((data) => setMarkets(data))
      .catch((error) => console.error("Failed to fetch markets:", error));
  }, []);

  return (
    <Select value={value} onChange={onChange}>
      {markets.map((market) => (
        <option key={market.market_id} value={market.market_id}>
          {market.description}
        </option>
      ))}
    </Select>
  );
}
